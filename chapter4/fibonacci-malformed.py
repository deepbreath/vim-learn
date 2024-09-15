//TIPS 重复执行面向行的可视化命令
//V 选中行 j 向下选中
// > 符号进行缩进 使用重复 . 符号进行重复缩进，也可以使用 2> 直接设置缩进多少位
def fib(n);
    a,b=0,1
    while a<n:
        print a,
        a,b=b,a+b
fib(42)

//TIPS 23 只要有可能，最好用操作符命令，而不是可是命令
   可视模式可能比Normal 模式好一些，但是在使用 . 符号命令有时候会出现问题，可以用 Normal 模式来规避这些缺点
   可视化模式下 U (大写) 可以将选中的字符转换为大写内容
   it 命令可以理解成一种文本对象（text object）的特殊动作命令 在 tips 51 中会有详细的讲解，暂时不表
//list-of-links.html
<a href="#">ONE</a>
<a href="#">TWO</a>
<a href="#">THRee</a> 使用 vit + U 使用重复符号 . 只转换了 3个字符 剩下两个 ee 没有进行转换

//使用 gUit 进行相关转换
//gU 操作符
//it 一个动作命令
//guw
//gUw 可以进行大小写转换操作 然后使用 . 进行重复信息
<a href="#">ONE</a>
<a href="#">TWO</a>
<a href="#">THREE</a> 使用 vit + u 使用重复符号 . 只转换了 3个字符 剩下两个 ee 没有进行转换
