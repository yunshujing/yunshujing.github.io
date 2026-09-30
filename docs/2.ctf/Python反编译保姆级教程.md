---
title: Python反编译保姆级教程
tags:
  - 学习
  - CTF
  - 逆向
createTime: 2024/12/07 20:57:55
permalink: /article/yojiotyd/
---

## 【出现的形式】

出现的话往往是python编写，然后编译好的exe或者elf文件，我们需要做的就是找到源码，分析逻辑，进行解密

## 【生成pyc文件】

使用的工具就是pyinstxtractor

[pyinstxtractor-2023.08.zip](https://www.yuque.com/attachments/yuque/0/2024/zip/40360107/1711534244541-742bff1f-b64c-4190-9347-33fdb07855ec.zip)

其中的py文件可以实现将exe文件或者elf文件，打包为

![](./assets/1f986c49f97446cc73aada1bbc928408.png)

使用方法（以snake.elf这个题目为例）

解压，将目标放入文件夹

![](./assets/ca332f9b4d10ad8b23c058e97ceeb8a2.png)

在这里打开cmd窗口 ,输入指令`python pyinstxtractor.py snake`

![](./assets/6dbdf6b11ca4a00e3710561fe4e72dba.png)

呈现如下就是成功，发现文件中多了一个_extracted文件夹，打开 ，去里面找到"目标文件名.pyc"的文件（往往与struct.pyc一并出现，都有用）

![](./assets/e3bd48c07728f8ad4d25d7d49f637e9d.png)

![](./assets/728ccf9c6cbd6c5ad810daadd3be497f.png)

注：进行完上述操作之后，可能会遇到文件头结构需要补充修改的情况，就是讲sanke和struct两个pyc文件放入010查看sanke的文件头是否与struct相同，不同的话要把后者的内容补充上去（目前做题还没遇到过这样的情况，可能现在这个工具比较好用了）再进行下一步操作。

## 【生成py文件，实现反编译】

这一步实现pyc文件转化为py源码

### （一）使用在线反编译网站

[python反编译 - 在线工具](https://tool.lu/pyc/)

这个网站可以实现的版本较多，但是有使用限制

[在线pyc,pyo,python,py文件反编译，目前支持python1.5到3.6版本的反编译-在线工具](http://tools.bugscaner.com/decompyle/)

这个网站使用方便但是很久没更新了

一般直接将上一步生成的pyc文件放入其中就可以生成py文件

### （二）pycdc工具进行反编译

其实在线工具就是利用这个玩意进行了python的反编译，之所以我们会用到这个工具，因为做题遇到了一个使用高版本python编写的exe，使用在线工具是无法完美反编译出来的。其实使用这个pycdc的话也会报错，但是由于我们在本地使用的脚本，我们就可以修改文件中的代码，实现绕过一些报错，大致反编译出来源码进行解密（下面第三点讲到）

其次就是，到后期，在没有联网的比赛中，这个工具就显得尤为重要了，我们接下来进行pycdc的几种安装方式的教程。

Windows与Linux系统安装的大致思路相似

github上下载压缩包/文件 - cmake进行编译生成可执行文件 - 成功运行

#### Linux系统（利用wsl，方便进行源码修改）

参考了上面提到的题目的题解，认识到了wsl这个伟大的功能（在windows的命令框中实现我们的linux操作）这篇文章讲的十分详尽了，本文就不再过多赘述了，直接进入我们安装pycdc的整正题

[安利\] WSL Linux 子系统，真香！完整实操 - 知乎](https://zhuanlan.zhihu.com/p/146545159)

（在linux上和下面的操作是一样的）

安装完毕wsl之后，打开cmd输入wsl切换系统

![](./assets/eb70c797dc3bc86ed1a16647747d17f9.png)

##### 先熟悉几个指令（萌新可以看看）

cd

地址跳转功能，我们输入cd ~之后会跳到最干净的地址

![](./assets/3f4f6a878975cfebc1fc2e936b4a0023.png)

ls

查看文件目录

![](./assets/488fdb627a9bfbeccb78c5097a925b0b.png)

我们发现就是我们的这几个目录

![](./assets/c363de7a9445facbb1fdfef24e6caf8a.png)

##### 正式安装

###### （1）准备工作:安装gcc，cmake，bulid包

`sudo apt-get update`

`sudo apt-get install gcc`

`sudo apt install cmake`

`sudo apt install build-essential`（第一次装的时候就是因为这个包没装上，cmake一直无法编译）



###### （2）git拉取文件

`git clone https://github.com/zrax/pycdc.git`

这样一来，再输入ls之后会像我上面展示的一样出现pycdc这个文件夹，当然我们还要去编译他



###### （3）地址切换到pycdc，进行编译

`cd pycdc`

![](./assets/bcddd14b9a10ec4ad96a8c979a5f56fc.png)



###### （4）编译过程

`cmake .`

![](./assets/731f7d81dde3dc90c1056a80c01d4e69.png)

`make`

![](./assets/2e2546ca7e1d804c135d69f671ae358c.png)

`sudo make install`

![](./assets/c7f1269e4ddba347b995edd690338e6d.png)

看到安装到bin目录下的两个文件就证明我们成功了，可以正常使用了，是不是非常方便

##### 使用方法

进入存放pyc文件的文件夹，打开终端进入wsl

![](./assets/00ceb0b37c795e7ad7ff57a43205871e.png)

输入命令`pycdc ./rc4.pyc`

![](./assets/21673ca13ae61f4f2e24af65a6626b81.png)

顺利反编译

当然你还可以选择直接生成py文件，命令

`pycdc ./rc4.pyc &gt;&gt; ../newrc4.py`就会在上一层目录中生成这个py文件

![](./assets/ab30a3aab616196529ff02618c8a5251.png)

和在窗口打开的并无差异

![](./assets/9c33e0a627fd3b505a11d69c03e27c00.png)

#### Windows系统

windows的操作可能比较繁琐，cmake的安装可能需要一定功夫，这里也给大家讲讲

##### 前期准备

首先就是需要的工具，vscode上的一些插件提前下载好



![](./assets/0993d7bbd342b5e1a4d00b2d463ccb17.png)

然后去下载一个cmake和MinGW，按照这个两篇文章来就好

[CMake 安装教程_cmake下载安装教程-CSDN博客](https://blog.csdn.net/qq_63585949/article/details/127079529)

[Mingw快捷安装教程 并完美解决出现的下载错误：The file has been downloaded incorrectly-CSDN博客](https://blog.csdn.net/yvge669/article/details/124564622)

##### 正式安装

（1）官网下载pycdc压缩包文件

[GitHub - zrax/pycdc: C++ python bytecode disassembler and decompiler](https://github.com/zrax/pycdc)

（2）解压的文件夹放入vscode中

![](./assets/9f905f208f029d9dd0166593427aaa17.png)

ctrl shift P 选择生成

![](./assets/e5de71a8941d79afa4c312b5c26a7c18.png)

下一步选择gcc

![](./assets/2e267d4243b5117f80a0e51314175b99.png)

最后发现出现了bulid文件夹，控制台也显示编译完成，在我们的文件夹的位置就出现了编译好的可执行文件

![](./assets/f8cd57e621560c4b55771971ed84c5e7.png)

![](./assets/22ae952c0a5928a63e9cf50f8d788ea9.png)

##### 使用方法

将上面的两个exe放入我们的pyc文件夹中，在终端打开

![](./assets/20a3f11ab556ed8418cd0b794bd63ac0.png)

输入命令 `pycdc.exe rc4.pyc`

![](./assets/150dd4c6d4007eed4017a9edb583e12d.png)

### （三）应用在题目中，随意修改编译我们的脚本源码

像上面这个图片中，我们并没有生成完整的反编译源码，原因是编写题目的python版本太高，pycdc在识别的时候出现了问题于是就没有继续进行编译，导致大量的信息丢失（当然我觉得pycdc的作者也会在后续进行高版本更新，无论是在线还是本地反编译都会没有问题）

那如果确实出现了这样的错误，我们有两种解决办法

（1）使用pycdas，生成汇编代码，进行阅读

（2）查看报错，让进入源码进行适当修改，编译出新的pycdc生成不报错的反编译。

这里只讲讲第二种方法。

使用wls的话，我们打开vscode

![](./assets/7044400597ff5621706e61c2c9a94eca.png)

选择右边的远程资源管理器，打开我们的pycdc文件夹

![](./assets/f525145a368df64817aff15dba844602.png)

进入这个ASTree.cpp的文件，copy刚才反汇编的报错

`Unsupported opcode: JUMP_BACKWARD`在vscode中进行检索

找到了这里

![](./assets/54b153e2c8b81f8efe960ba4e1f99bc3.png)

```
fprintf(stderr, "Unsupported opcode: %s\n", Pyc::OpcodeName(opcode &amp; 0xFF));
cleanBuild = false;
//return new ASTNodeList(defblock-&gt;nodes());
```

这里的return语句就是我们没找到反编译的字节之后，我就不再继续反编译return，我们注释掉这条语句，重新按照（二）中的过程进行编译，这样子我们的pycdc就是不会再return的工具了

![](./assets/2015fa6a55066702eea4cdba0837d36c.png)

```
# Source Generated with Decompyle++
# File: rc4.pyc (Python 3.11)

import time
a = input()

def swap_uchar(x, y):
    return (y, x)


def rc4_ksa(key):
    sbox = list(range(256))
    j = 0
    for i in range(256):
        j = (j + sbox[i] + key[i % len(key)]) % 256
        (sbox[i], sbox[j]) = swap_uchar(sbox[i], sbox[j])
    return sbox


def rc4_prga(sbox, data_length):
    i = 0
    j = 0
    key_stream = bytearray()
    for k in range(data_length):
        i = (i + 1) % 256
        j = (j + sbox[i]) % 256
        (sbox[i], sbox[j]) = swap_uchar(sbox[i], sbox[j])
        t = (sbox[i] + sbox[j]) % 256
        key_stream.append(sbox[t])
    return key_stream


def rc4_crypt(data, key_stream):
    result = bytearray()
    for i in range(len(data)):
        result.append(data[i] ^ key_stream[i])
    return result


def tea(v, k):
    delta = 0x9E3779B9
    mask = 0xFFFFFFFF
    rounds = 32
    v1 = v[1]
    v0 = v[0]
    sum = delta * rounds &amp; mask
    for i in range(rounds):
        v1 -= (v0 &lt;&lt; 4) + k[2] ^ v0 + sum ^ (v0 &gt;&gt; 5) + k[3]
        v1 &amp;= mask
        v0 -= (v1 &lt;&lt; 4) + k[0] ^ v1 + sum ^ (v1 &gt;&gt; 5) + k[1]
        v0 &amp;= mask
        sum -= delta
        sum &amp;= mask
    return [
            v0,
            v1]


def main():
    key = 'abcdefghijklmnopqrstuvwxyz'
    key3 = [
        19088743,
        0x89ABCDEF,
        0xFEDCBA98,
        1985229328]
    data = bytearray(str(a), 'utf-8')
    sbox = rc4_ksa(bytearray(key, 'utf-8'))
    key_stream = rc4_prga(sbox[:], len(data))
    encrypted_data = rc4_crypt(data, key_stream)
    b = (lambda .0: for x in .0:      
format(x, '02X')None)(encrypted_data())
    key_list = [
        47,
        138,
        127,
        57,
        117,
        188,
        51,
        143,
        17,
        22]
    encrypted_values = range(0, len(b), 16)()
    original_data = []
    for i, encrypted_value in enumerate(encrypted_values):
        encrypted_value = encrypted_value.ljust(16, '0')
        key2 = (key_list[i] &gt;&gt; 4) + ((key_list[i] &amp; 15) &lt;&lt; 4)
        original_data.append([
            int(encrypted_value[:8], 16) ^ key2,
            int(encrypted_value[8:], 16) ^ key2])
        decrypted_values = original_data()
        check = (lambda .0: for value in .0:
[ hex(value[0])[2:] + ' ' + hex(value[1])[2:] + ' ' ])(decrypted_values()).upper().strip()
        if check == '2E895417 9EDAC23D E4A8A87A B63C2690 E6423D70 F7E9C8AD':
            print('yea!')
            time.sleep(10)
            quit()
            return None
        ''.join('nooooooooooooooooooooooooooooooooooooo')
        time.sleep(10)
        quit()
        return None

if __name__ == '__main__':
    main()
return None

```

题解就写在别的文章中了，题目附件放到这里了

[RC4.zip](https://www.yuque.com/attachments/yuque/0/2024/zip/40360107/1711605481131-363c25a3-294d-41c0-8b32-b83f26aef458.zip)

## 【总结】

通过这次的学习，深入了解了python的反编译过程，学习到了wsl这个方便的功能，也简单学习了linux上的一些操作。

参考文章：

[Python 反编译：pycdc工具的使用-CSDN博客](https://blog.csdn.net/qq_63585949/article/details/127080253)

[Linux\] 使用 Decompile++ (pycdc) 反組譯 pyc 檔案 | EPH 的程式日記](https://ephrain.net/linux-%E4%BD%BF%E7%94%A8-decompile-pycdc-%E5%8F%8D%E7%B5%84%E8%AD%AF-pyc-%E6%AA%94%E6%A1%88/)

[安利\] WSL Linux 子系统，真香！完整实操 - 知乎](https://zhuanlan.zhihu.com/p/146545159)








