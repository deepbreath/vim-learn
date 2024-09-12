//以退为进，处理在字符前后各增加一个空格
//example
var foo="method("+argument1+","+argument2+")";
// 使用 f {输入当前行需要查找的内容}
// ; 符号重复执行上一次 f 命令查找的内容，不用每次输入 f{char}
var foo="method(" + argument1 + "," + argument2 + ")";
//可重复操作使用以及撤回
做出一个修改                {edit}              .(重复) u(撤回)
在行内查找下一个指定字符       f{char}/t{char}     ;     ,
在行内查找上一个指定字符       F{char}/T{char}     ;     ,(逗号)
在文档内查找下一个匹配项       /pattern<CR>        n     N
在文档内查找下一个匹配项       ?parttern<CR>       n     N
当前文档内执行替换            :s/target/replacement     &(重复替换)  u(撤回)