# 安装依赖
install_dependices () {
    echo "sudo bundle install" # >> $FILE
    output=`sudo bundle install`
    echo "${output}" # >> $FILE
}

# 打包
build () {
    echo "bundle exec jekyll b" # >> $FILE
    output=`bundle exec jekyll b`
    echo "${output}" # >> $FILE
}

echo_start () {
    echo "---------------    DEPLOY START @$datetime   --------------------------------------" # >> $FILE
    export PATH=$PATH:/opt/nodejs/bin/
    echo $PATH
    echo "Deploying..."
}

echo_end () {
    echo "Deploy Done, everythings is OK!"
    datetime=$(date '+%Y-%m-%d %H:%M:%S')
    echo "---------------    DEPLOY DONE @${datetime}   ----------------------------------------" # >> $FILE
}
# 提升权限
update_authorization () {
    echo "chown -R www:www ./ && chmod -R 777 ./" # >> $FILE
    chown -R www:www ./ && chmod -R 777 ./
}

echo_start && update_authorization && install_dependices && build && echo_end