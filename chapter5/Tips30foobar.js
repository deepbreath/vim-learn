//Tips30 在指定范围上执行普通模式命令
//如果想在一系列连续上执行一条普通模式命令，我们可以用:normal 命令。此命令在与 . 符号
//命令或宏结合使用时，我们只需要花费很少的努力就能完成大量重复性质的任务
//jVG 下一行选中到结尾
//: 进入 Ex
//:'<,'>normal . 对高亮选中的每一行，对其执行普通模式下的 . 进行重复
//:%normal A; % 符号代表整个文件范围,因此 :%normal A; 告诉 Vim 文件每行的结尾都添加一个分号
//在做此修改时会切换到插入模式，但在修改完后 Vim 会自动回到普通模式


//:bn[ext] 可以在列表中逐项正向移动
//:bp[revious] 可以进行反向移动
//使用 <C-o> 命令回回到跳转列表上条记录
//如果使用@: 重复任意多次，如果想回跳，就需要使用 <C-o>
// Ex 命令需要使用 u 才能撤销其影响
var foo=1
var bar='a'
var baz='Z'
var foobar=foo+bar
var foobarbaz=foo+bar+baz
