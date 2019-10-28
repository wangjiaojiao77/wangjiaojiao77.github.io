public function go() {
    // webhook上设置的secret
    $secret = "jojo";

    // 校验发送位置，正确的情况下自动拉取代码，实现自动部署
    $signature = $_SERVER['HTTP_X_HUB_SIGNATURE'];
    if ($signature) {
        $hash = "sha1=".hash_hmac('sha1', file_get_contents("php://input"), $secret);
        if (strcmp($signature, $hash) == 0) {
            // sign sucess

            set_time_limit(3 * 60); //最大过期时间3分钟
            $shellPath = "/home/www/T-Blog";
            $cmd = "cd $shellPath && sudo git pull && sudo /bin/bash CI.sh";
            $res = $this -> doShell($cmd);
            print_r($res); // 主要打印结果给github记录查看，自己测试时查看

        }
    }
}

/*
 * 执行shell命令
 */
protected function doShell($cmd, $cwd = null) {
    $descriptorspec = array(
        0 => array("pipe", "r"), // stdin
        1 => array("pipe", "w"), // stdout
        2 => array("pipe", "w"), // stderr
    );
    $proc = proc_open($cmd, $descriptorspec, $pipes, $cwd, null);
    // $proc为false，表明命令执行失败
    if ($proc == false) {
        return false;
        // do sth with HTTP response
        print_r("命令执行出错！");
    } else {
        $stdout = stream_get_contents($pipes[1]);
        fclose($pipes[1]);
        $stderr = stream_get_contents($pipes[2]);
        fclose($pipes[2]);
        $status = proc_close($proc); // 释放proc
    }
    $data = array(
        'stdout' => $stdout, // 标准输出
        'stderr' => $stderr, // 错误输出
        'retval' => $status, // 返回值
    );

    return $data;
}