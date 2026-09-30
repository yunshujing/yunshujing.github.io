---
title: 暑期ACM-Week2
createTime: 2024/07/29 22:00:00
tags:
  - 学习
  - 代码
  - ACM
permalink: /article/8clux92a/
---
<a name="gumpX"></a>
## 知识点
<a name="EEIqg"></a>
### Vscoede配置C/C++
[vscode for c/c++（ACM配置）_vscosd配置acm-CSDN博客](https://blog.csdn.net/flyawayl/article/details/89094499)<br />[【VS Code】c++环境配置 && .vscode文件 && Code Runner的exe文件指定生成位置 && c++未定义标识符问题 - 稻花香里亦江湖 - 博客园](https://www.cnblogs.com/something-/p/17028854.html)<br />[【C/C++】在VSCode中配置C/C++环境（使用gdb和code-runner两种方式配置）_vscode_不言_-GitCode 开源社区](https://gitcode.csdn.net/662630c9a2b0512255658b43.html?dp_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MzM4MjEyMywiZXhwIjoxNzIxODk0NzM4LCJpYXQiOjE3MjEyODk5MzgsInVzZXJuYW1lIjoid2VpeGluXzcyNzI0NTA3In0.Z0KhWzuoHq8IEzkQMpyL_G0wr0bokc_w4QcDyGw4eSw)<br />[Code Runner使用说明（快速运行调试代码，无需配置繁杂的环境）-CSDN博客](https://blog.csdn.net/qq_29536545/article/details/119034244)<br />[【整理总结】VSCode常用插件和好用配置（小白必看）_vscode 插件-CSDN博客](https://blog.csdn.net/qq_43067585/article/details/129049818)<br />[Visual Studio Code August 2021](https://code.visualstudio.com/updates/v1_60#_high-performance-bracket-pair-colorization)<br />[最新最全 VSCODE 插件推荐（2024版）_vscode插件-CSDN博客](https://blog.csdn.net/u011262253/article/details/113879997)
**c_cpp_properties.json**```cpp
//c_cpp_properties.json
{
    "configurations": [
        {
            "name": "Win32",
            "includePath": [
                "${workspaceFolder}/**"
            ],
            "defines": [
                "_DEBUG",
                "UNICODE",
                "_UNICODE"
            ],
            "windowsSdkVersion": "10.0.22621.0",
            "compilerPath": "D:/Program Files/mingw64/bin/gcc.exe",
            "cStandard": "c17",
            "cppStandard": "c++17",
            "intelliSenseMode": "gcc-x64"
        },
        {
            "name": "C++",
            "includePath": [
                "${workspaceFolder}/**"
            ],
            "defines": [
                "_DEBUG",
                "UNICODE",
                "_UNICODE"
            ],
            "windowsSdkVersion": "10.0.22621.0",
            "compilerPath": "D:/Program Files/mingw64/bin/g++.exe",
            "cStandard": "c17",
            "cppStandard": "c++17",
            "intelliSenseMode": "gcc-x64"
        },
        {
            "name": "MinGW64",
            "intelliSenseMode": "gcc-x64",
            "compilerPath": "D:/Program Files/mingw64/bin/g++.exe",
            "includePath": [
                "${workspaceFolder}"
            ],
            "cppStandard": "c++17"
        }
    ],
    "version": 4
}
```
**launch.json**```cpp
//launch.json
{
    // 使用 IntelliSense 了解相关属性。 
    // 悬停以查看现有属性的描述。
    // 欲了解更多信息，请访问: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
        {
            "name": "C++ Launch (GDB)",                 // 配置名称，将会在启动配置的下拉菜单中显示
            "type": "cppdbg",                           // 配置类型，这里只能为cppdbg
            "request": "launch",                        // 请求配置类型，可以为launch（启动）或attach（附加）
            "targetArchitecture": "x64",                // 生成目标架构，一般为x86或x64
            "program": "${fileDirname}/exe/${fileBasenameNoExtension}.exe", // 将要进行调试的程序的路径
            "args": [],                                 // 程序调试时传递给程序的命令行参数，一般设为空即可
            "stopAtEntry": false,                       // 设为true时程序将暂停在程序入口处，一般设置为false
            "cwd": "${workspaceRoot}",                  // 调试程序时的工作目录，一般为${workspaceRoot}
            "externalConsole": false,                    // 调试时是否显示控制台窗口，一般设置为true显示控制台
            "internalConsoleOptions": "neverOpen",      // 如果不设为neverOpen，调试时会跳到“调试控制台”选项卡",
            "MIMode": "gdb",                            // 指定连接的调试器
            "miDebuggerPath": "D:\\Program Files\\mingw64\\bin\\gdb.exe", // 调试器路径
            "setupCommands": [
                {
                    "description": "Enable pretty-printing for GDB",
                    "text": "-enable-pretty-printing",
                    "ignoreFailures": false
                }
            ],
            "preLaunchTask": "Compile" 
        },

        
        {
            "name": "(gdb) 启动",
            "type": "cppdbg",
            "request": "launch",
            "program": "${fileDirname}\\exe\\${fileBasenameNoExtension}.exe",  //输入程序名称(也就是需要调试的文件)，例如 ${workspaceFolder}/a.exe
            "args": [],
            "stopAtEntry": false,
            "cwd": "${fileDirname}",
            "environment": [],
            "externalConsole": false,
            "MIMode": "gdb",
            "miDebuggerPath": "D:\\Program Files\\mingw64\\bin\\gdb.exe",  //调试的工具（mingw,bin中有gdb）   /path/to/gdb
            "setupCommands": [
                {
                    "description": "为 gdb 启用整齐打印",
                    "text": "-enable-pretty-printing",
                    "ignoreFailures": true
                },
                {
                    "description": "将反汇编风格设置为 Intel",
                    "text": "-gdb-set disassembly-flavor intel",
                    "ignoreFailures": true
                }
            ]
        }

    ]
}
```
**settings.json**```cpp
//settings.json
{
    "files.associations": {
        "*.cjson": "jsonc",
        "*.wxss": "css",
        "*.wxs": "javascript",
        "memory": "cpp",
        "deque": "cpp",
        "string": "cpp",
        "vector": "cpp",
        "iostream": "cpp",
        "array": "cpp",
        "bitset": "cpp",
        "string_view": "cpp",
        "initializer_list": "cpp",
        "regex": "cpp",
        "utility": "cpp",
        "valarray": "cpp",
        "*.tcc": "cpp",
        "optional": "cpp",
        "istream": "cpp",
        "ostream": "cpp",
        "ratio": "cpp",
        "system_error": "cpp",
        "functional": "cpp",
        "tuple": "cpp",
        "type_traits": "cpp",
        "list": "cpp",
        "unordered_map": "cpp",
        "unordered_set": "cpp",
        "forward_list": "cpp",
        "map": "cpp",
        "typeindex": "cpp",
        "typeinfo": "cpp",
        "atomic": "cpp",
        "cctype": "cpp",
        "cfenv": "cpp",
        "charconv": "cpp",
        "chrono": "cpp",
        "cinttypes": "cpp",
        "clocale": "cpp",
        "cmath": "cpp",
        "codecvt": "cpp",
        "complex": "cpp",
        "condition_variable": "cpp",
        "csetjmp": "cpp",
        "csignal": "cpp",
        "cstdarg": "cpp",
        "cstddef": "cpp",
        "cstdint": "cpp",
        "cstdio": "cpp",
        "cstdlib": "cpp",
        "cstring": "cpp",
        "ctime": "cpp",
        "cuchar": "cpp",
        "cwchar": "cpp",
        "cwctype": "cpp",
        "exception": "cpp",
        "algorithm": "cpp",
        "iterator": "cpp",
        "memory_resource": "cpp",
        "numeric": "cpp",
        "random": "cpp",
        "set": "cpp",
        "fstream": "cpp",
        "future": "cpp",
        "iomanip": "cpp",
        "iosfwd": "cpp",
        "limits": "cpp",
        "mutex": "cpp",
        "new": "cpp",
        "scoped_allocator": "cpp",
        "shared_mutex": "cpp",
        "sstream": "cpp",
        "stdexcept": "cpp",
        "streambuf": "cpp",
        "thread": "cpp"
    },
    "C_Cpp.errorSquiggles": "Tag Parser"
}
```
**tasks.json**```cpp
//tasks.json
{
    "version": "2.0.0",
    "tasks": [
        {
            "label": "Compile",
            "command": "g++",
            "args": [
                "${file}",
                "-o",
                "${fileDirname}/exe/${fileBasenameNoExtension}.exe",
                "-O0",
                "-ggdb3",
                "-Wall",
                "-static-libgcc",
                "-std=c++17",
                "-finput-charset=UTF-8",
                "-fexec-charset=GB18030",
                "-D _USE_MATH_DEFINES"
            ],
            "problemMatcher": {
                "owner": "cpp",
                "fileLocation": [
                    "absolute"
                ],
                "pattern": {
                    "regexp": "^(.*):(\\d+):(\\d+):\\s+(warning|error):\\s+(.*)$",
                    "file": 1,
                    "line": 2,
                    "column": 3,
                    "severity": 4,
                    "message": 5
                }
            },
            "type": "shell",
            "group": "build",
            "presentation": {
                "echo": true,
                "reveal": "always",
                "focus": false,
                "panel": "shared"
            }
        },
        {
            "type": "cppbuild",
            "label": "C/C++: g++.exe 生成活动文件",
            "command": "D:\\Program Files\\mingw64\\bin\\g++.exe",
            "args": [
                "-fdiagnostics-color=always",
                "-g",
                "${file}",
                "-o",
                "${fileDirname}\\exe\\${fileBasenameNoExtension}.exe"
            ],
            "options": {
                "cwd": "${fileDirname}"
            },
            "problemMatcher": [
                "$gcc"
            ],
            "group": {
                "kind": "build",
                "isDefault": true
            },
            "detail": "调试器生成的任务。"
        }
    ]
}
```
<a name="rnGIz"></a>
### 代码模板
```cpp
#include<bits/stdc++.h>
using namespace std;
#define int long long
#define endl "\n"
const int N = 1e6 + 10;

signed main(){
    ios::sync_with_stdio(false);
    cin.tie(nullptr);cout.tie(nullptr);//关闭同步流

    return 0;
}
```
<a name="uELRk"></a>
### scanf，printf & cin, cout（2）
<a name="oICJV"></a>
#### 输入大量数据的速度问题
`cin, cout`输入数据达到`1e6`或`1e7`后会变慢，则<br />    改为`scanf，printf`<br />or	**关闭同步流**
```cpp
ios::sync_with_stdio(false);
cin.tie(nullptr);
cout.tie(nullptr);//关闭同步流
```
**注意**：关闭同步流后不可与`scanf，printf`同时使用！！！
<a name="OzJCw"></a>
#### cout的输出格式
`cout`默认保留小数点后`4`位<br />`cout<<fixed<<setprecision(2)<<endl;`保留小数点后2位
<a name="ZqkzJ"></a>
### 切割字符串
<a name="00e874f8"></a>
#### 方法1：使用`std::istringstream`
`std::istringstream`是C++标准库中的一个输入字符串流，它允许你像从文件或其他输入流中读取数据一样从字符串中读取数据。当你从`std::istringstream`中读取数据时，它会自动按空格（或其他空白字符）分割字符串。
```cpp
#include <iostream>  
#include <sstream>  
#include <vector>  
#include <string>  
  
int main() {  
    std::string sentence = "This is a sample sentence.";  
    std::istringstream iss(sentence);  //思考与 stringstream 的区别
    std::string word;  
    std::vector<std::string> words;  
  
    // 读取单词直到没有更多数据  
    while (iss >> word) {  
        words.push_back(word);  
    }  
  
    // 打印结果  
    for (const auto& w : words) {  
        std::cout << w << std::endl;  
    }  
  
    return 0;  
}
```
<a name="1f2f7ac4"></a>
#### 方法2：使用正则表达式
虽然对于简单的空格分隔任务，`std::istringstream`更为直接和高效，但正则表达式提供了更强大的文本处理能力。如果你需要处理更复杂的分隔符（比如逗号、分号或标点符号），或者你想要在分割单词时保留标点符号（例如，将"hello,"作为一个单独的单词），那么正则表达式将是一个不错的选择。
```cpp
#include <iostream>  
#include <vector>  
#include <string>  
#include <regex>  
  
int main() {  
    std::string sentence = "This, is a sample; sentence.";  
    std::regex word_regex("[^\\s,;\\.]+"); // 匹配一个或多个非空白、非逗号、非分号、非句点的字符  
    std::sregex_token_iterator iter(sentence.begin(), sentence.end(), word_regex, 0);  
    std::sregex_token_iterator end;  
  
    std::vector<std::string> words(iter, end);  
  
    // 打印结果  
    for (const auto& w : words) {  
        std::cout << w << std::endl;  
    }  
  
    return 0;  
}
```
请注意，上面的正则表达式示例`"[^\\s,;\\.]+"`可能并不完全符合你的需求，因为它将逗号、分号和句点视为单词的一部分。如果你想要完全按空格分割单词，并且忽略其他所有标点符号，你可能需要调整正则表达式。但是，如果你的目的是按多种分隔符分割单词，并且保留这些分隔符作为单词的一部分，那么你可以根据需要修改正则表达式。<br />对于简单的空格分隔任务，推荐使用`std::istringstream`，因为它更简单、更直接，并且性能通常更好。对于更复杂的文本处理任务，正则表达式提供了更灵活和强大的解决方案。
<a name="QVTvT"></a>
### stringstream和isitringstream的区别
`stringstream` 和 `istringstream` 都是 C++ 标准模板库（STL）中的类，它们提供了将字符串与输入/输出流操作相结合的功能。这两个类在功能和用途上存在一些关键的区别，具体如下：
<a name="Dv8VU"></a>
#### stringstream

- **功能**：`stringstream` 类同时支持从字符串中读取数据和向字符串中写入数据，即它支持C风格字符串的输入输出操作。这使得 `stringstream` 成为一个非常灵活的类，可以在需要同时处理字符串的读写操作时使用。
- **用途**：`stringstream` 常用于需要将数值类型数据格式化为字符串，或者将字符串拆分为数值类型数据的场景。此外，它还可以用于字符串的拼接和格式化输出等。
- **示例**：
```cpp
#include <iostream>
#include <sstream>
#include <string>
using namespace std;

int main() {
    stringstream ss;
    ss << "Hello";
    ss << " ";
    ss << "World!";
    cout << ss.str() << endl; // 输出: Hello World!
    return 0;
}
```
<a name="Q39lw"></a>
#### istringstream

- **功能**：`istringstream` 类主要用于从字符串中读取数据，它提供了类似于 `std::cin` 的接口，可以方便地从字符串中提取数据，并将其转换为不同的数据类型。但是，与 `stringstream` 不同，`istringstream` 不支持向字符串中写入数据。
- **用途**：`istringstream` 常用于需要从字符串中解析出多种类型数据的场景，如解析包含数字、单词等的复杂字符串。
- **示例**：
```cpp
#include <iostream>
#include <sstream>
#include <string>
using namespace std;

int main() {
    string str = "123 4.56 hello";
    istringstream iss(str);
    int num;
    float fnum;
    string word;
    iss >> num >> fnum >> word;
    cout << num << " " << fnum << " " << word << endl; // 输出: 123 4.56 hello
    return 0;
}
```
<a name="KIyvb"></a>
#### 总结
|  | stringstream | istringstream |
| --- | --- | --- |
| **功能** | 同时支持从字符串中读取数据和向字符串中写入数据 | 仅支持从字符串中读取数据 |
| **用途** | 字符串的读写操作、数值类型与字符串的相互转换、字符串拼接等 | 从字符串中解析出多种类型的数据 |
| **示例** | 字符串的拼接和输出 | 从字符串中提取并转换数据 |

通过对比可以看出，`stringstream` 和 `istringstream` 在功能上各有侧重，选择哪个类取决于你的具体需求。如果你需要同时处理字符串的读写操作，那么 `stringstream` 是更好的选择；如果你只需要从字符串中读取数据，那么 `istringstream` 将更加高效和方便。
<a name="iTzb5"></a>
### queue队列
<a name="dCRXy"></a>
#### queue的定义
队列`Queue`是一种常见的数据结构，其主要特点是`先进先出`（FIFO：First In First Out）。<br />在队列中，数据的插入和删除操作分别在表的不同端进行。具体来说，向队列中添加新元素的一端称为“队尾”`rear`，而从队列中移除元素的一端称为“队头”`front`.<br />队列和栈的区别:<br />栈只能知道最后插进去的元素,队列可以知道最先和最后插进去的元素;栈是`后进先出`,队列是`先进后出`
<a name="j67J5"></a>
#### queue的语法
| 例子 | 说明 |
| --- | --- |
| q.front(); | 返回队首元素 |
| q.back(); | 返回队尾元素 |
| q.push(); | 在队尾插入元素 |
| q.pop(); | 弹出队首元素 |
| q.empty; | 队列是否为空 |
| q.size(); | 返回队列中的元素的数量 |

例题<br />[P1996 约瑟夫问题](https://www.luogu.com.cn/problem/P1996)
```cpp
#include<bits/stdc++.h>
using namespace std;
int main(){
    int n,m;int tmp;
    cin>>n>>m;
    queue <int> q;
    for (int i = 1; i <= n; i++)
        {
            q.push(i);
        }
    while (!q.empty())
        {
            tmp++;
            if(tmp%m!=0){
                q.push(q.front());
                q.pop();
            }
            else{
                cout<<q.front()<<" ";
                q.pop();
            }
        }
    return 0;
}
```
<a name="ZRhRI"></a>
### 堆/优先队列(priority_queue)
<a name="ipGWx"></a>
#### 堆的定义
堆是一种特殊的数据结构，通常可以被看作是一棵完全二叉树的数组对象。<br />其主要特性包括：<br />**完全二叉树**：除最后一层外，每一层上的节点数均达到最大值；在最后一层上只缺少右边的若干节点。<br />**值的性质**：对于大顶堆，每个父节点的值都大于或等于其子节点的值；对于小顶堆，每个父节点的值都小于或等于其子节点的值。<br />**高效性**：堆是实现优先队列的一种非常高效的方法，能够快速找到包含最大值或最小值的节点。
<a name="Fen3s"></a>
#### 优先队列的定义
优先队列`priority_queue`是一种特殊的队列，其中元素被赋予优先级，当访问队列元素时，具有最高优先级的元素最先删除。<br />优先队列与普通队列最大的不同点在于它根据元素的优先级进行排序和处理。<br />具体来说：<br />**优先级**：每个元素都有一个优先级，优先级高的元素会先于优先级低的元素被访问或删除。<br />**操作**：支持查找最高优先级元素、删除最高优先级元素和插入指定优先级的新元素等操作。<br />**实现基础**：优先队列通常基于堆来实现，因此其性能也依赖于堆的性质和实现方式。
<a name="wbzls"></a>
#### 优先队列的语法
| 例子 | 说明 |
| --- | --- |
| pq.push(int x); | 向优先队列中插入一个整数 |
| pq.pop(); | 删除并返回优先队列中的最大元素 |
| pq.top(); | 返回但不移除优先队列中的最大元素 |
| pq.empty(); | 检查优先队列是否为空。 |

C++中的优先队列是标准模板库（STL）的一部分，通常使用`priority_queue`模板类来实现。
```cpp
   #include <queue>
   using namespace std;

   int main() {
       priority_queue<int> pq;
       // 插入元素
       pq.push (5);
       pq.push (3);
       pq.push (7);
       // 删除最高优先级的元素
       pq.pop ();
       // 获取最高优先级的元素
       cout << pq.top () << endl;
       return 0;
   }
```
在C++中，`priority_queue`默认为`最大堆`从大到小，即最大的元素会首先被移除。<br />可以通过第三个模板参数来指定排序方式，例如：<br />   `priority_queue<int, vector<int>, greater<int>> pq;`<br />这样可以将优先队列变为`最小堆`。<br />1.**元素类型**：`int`表示优先队列中存储的元素类型。<br />2.**底层容器**：`vector<int>`表示用于存储元素的容器类型。在优先队列中，默认使用`vector`作为底层容器。<br />3.**比较函数对象**：`greater<int>`，这是一个仿函数，用于指定元素的排序方式。由于使用了`greater<int>`，因此该优先队列会按照从小到大的顺序排列元素，即小顶堆。<br />默认情况下，`priority_queue`使用`std::less`作为其比较函数，这意味着它会创建一个大顶堆。<br />访问`priority_queue`的顶部元素`top()`的时间复杂度是`O(1)`，但插入`push()`和删除顶部元素`pop()`的时间复杂度是`O(log n)`，其中n是队列中元素的数量。<br />`priority_queue`不保证元素的顺序（除了顶部元素），也不提供随机访问。<br />**结构体类型**
```cpp
struct Node {
    int a, b;
    // 重载小于操作符，以实现自定义排序规则
    bool operator<(const Node& other) const {               //[记住格式]
        // 假设我们希望先按a升序排序，如果a相同，则按b降序排序
        if (a != other.a) return a < other.a;
        return b > other.b; // 注意这里使用'>'来实现b的降序
    }
};

int main() {
    priority_queue<Node> pq;
    Node n1{ 1, 9 };
    Node n2{ 1, 5 };
    Node n3{ 9, 1 };

    pq.push(n1);
    pq.push(n2);
    pq.push(n3);

    while (!pq.empty()) {
        Node top = pq.top();
        pq.pop();
        cout << top.a << " " << top.b << endl;
    }

    return 0;
}
```
例题<br />[P1090 [NOIP2004 提高组] 合并果子](https://www.luogu.com.cn/problem/P1090)
<a name="SzInT"></a>
### 双端队列
<a name="RFL7V"></a>
#### Deque的定义
双端队列（Double-Ended Queue，简称Deque）是一种具有队列和栈性质的数据结构。<br />其主要特点是允许在两端进行插入和删除操作，即可以在队首（前端）和队尾（后端）同时进行入队和出队操作。<br />双端队列是限定插入和删除操作在表的两端进行的线性表。这两端分别称为端点1和端点2。<br />双端队列的元素可以从两端弹出，因此它兼具了队列和栈的特性.
<a name="vmzkx"></a>
#### Deque的语法
在C++中，标准模板库（STL）提供了`std::deque`来实现双端队列的功能。<br />`std::deque`可以被视为一个固定大小的数组，但它可以动态增长和缩减，且不需要在每次插入或删除时重新分配整个数组的内存。这种特性使得`std::deque`在插入和删除操作上非常高效。<br />在C++中，使用双端队列需要包含相应的头文件：<br />    `#include <deque>`<br />定义一个双端队列对象的基本语法如下：<br />    `deque<element_type> deq;`<br />其中element_type可以是任意类型的数据，例如整数、字符串等。

| 例子 | 说明 |
| --- | --- |
| deq.push_back(x); | 在队列尾部插入元素x |
| deq.push_front(x); | 在队列头部插入元素x |
| deq.pop_back(); | 删除队列尾部的元素 |
| deq.pop_front(); | 删除队列头部的元素 |
| deq.at(size_type pos); | 返回位置pos处的元素，如果位置超出范围则引发异常 |
| deq.find(const value_type& val); | 查找指定值val的位置，并返回迭代器指向该位置，如果未找到则返回end() |

以下是定义和使用 std::deque 的基本语法：
```cpp
#include <iostream>
#include <deque>

int main()
{
    // 定义一个 int 类型的双端队列
    std::deque<int> myDeque;

    // 向队列头部插入元素
    myDeque.push _back(10);
    myDeque.push _back(20);
    myDeque.push _back(30);

    // 向队列尾部插入元素
    myDeque.push _back(40);
    myDeque.push _back(50);

    // 删除队列头部元素
    myDeque.pop _back();

    // 删除队列尾部元素
    myDeque.pop _back();

    // 查找并打印所有元素
    for (int num : myDeque)
    {
        std::cout << num << " ";
    }
    return 0;
}
```
<a name="zxQnw"></a>
### Set集合
<a name="tgVRA"></a>
#### Set的定义
在C++中，`set`是标准模板库（STL）的一部分，用于存储已排序且唯一的一组元素。其主要特点包括：<br />**数据结构**：`set`通常使用红黑树`red-black tree`实现，这使得它具有对数时间复杂度`O(logn)`的查找、插入和删除操作。<br />**元素特性**：集合中的每个元素都是唯一的，并且按照`升序`排列，但也可以通过自定义比较函数来实现其他的排序方式，如`降序`加上`greater<int>`。<br />**不可变性**：一旦元素被插入到`set`中，其值不能被修改，但可以进行插入或删除操作。<br />**迭代器**：`set`提供了迭代器，用于遍历集合中的元素。<br />**有什么用**：去重、排序
<a name="QxrLI"></a>
#### Set的语法
| 例子 | 说明 |
| --- | --- |
| St.insert(); | 当set里没有等价函数时，将x插入到set中 |
| St.erase(); | 从set中删除指定元素（若无则也无影响，即无操作） |
| St.clear(); | 清空set容器 |
| st.count(x); | 返回set内的x元素的数量，因为最多存在一个，返回值 1 or 0 |
| St.empty(); | 判断set是否为空 |
| St.size(); | 返回set内的元素个数 |
| St.find(); | 函数用于查找指定值的位置 |

以下是一个完整的示例程序，演示如何定义和操作一个`set`：
```cpp
#include <iostream>
#include <set>
using namespace std;
int main(){
    // 创建并初始化set
    set<int> my_set = {1, 2, 3};//默认升序
    set<int,greater<int> > my_set2 = {1, 2, 3};//降序

    // 插入新元素
    my_set.insert(4);

    // 查找元素
    auto it = my_set.find(2);
    if (it != my_set.end())
    {
        cout << *it << endl; // 输出2
    }

    // 删除元素
    my_set.erase(my_set.find(1));

    // 遍历集合并输出所有元素
    for (const auto &val : my_set)
    {
        cout << val << " ";
    }
    return 0;
}
```
<a name="YnzUc"></a>
### Multiset可重集合
<a name="wmnXq"></a>
#### Multiset的定义
在C++中，`multiset`是一个非常有用的STL（标准模板库）容器类型，用于存储和操作具有相同键值对的元素集合。<br />与set不同的是，`multiset`允许重复的元素存在，并且能够保持这些元素的有序性。<br />`St.begin();`返回set第一个元素的地址的迭代器<br />`St.end();`返回set最后一个元素的地址的下一个地址的迭代器<br />`St.erase(T x/iterator it)`<br />`Lower_bound`二分查找 `upper_bound()`<br />**元素特性**：集合中的每个元素都是唯一的，并且按照`升序`排列，<br />但也可以通过自定义比较函数来实现其他的排序方式，如`降序`加上`greater<int>`
<a name="LrRE1"></a>
### Map
<a name="aXepd"></a>
#### Map的定义
在C++中，`Map`是一种关联容器，它存储的元素是键值对`key-value pairs`。<br />每个元素都是一个键值对，其中键（key）是唯一的，而值（value）则可以是任何数据类型。<br />Map内部通常实现为一个红黑树（或类似的平衡二叉搜索树），这意味着 map 中的元素总是按照键的升序排列。因此，map 提供了快速的查找、插入和删除操作，这些操作的时间复杂度通常为对数时间`O(log n)`，其中`n`是`map`中元素的数量。<br />也可以理解成一个结构体数组,只是数组的下标和值都是任意的。<br />[注意事项]<br />`map`中的键必须是唯一的。<br />`map`中的元素按照键的升序排列。<br />访问不存在的键时，使用下标操作符会创建一个新元素。如果你只是想检查键是否存在，应该使用 find 成员函数。<br />`map`的插入、删除和查找操作的时间复杂度通常为`O(log n)`。
<a name="Xzmp3"></a>
#### Map的语法
基本的`std::map`声明语法如下：<br />    `map<KeyType, ValueType> mapName;`<br />`KeyType` 是键的类型,它必须支持 < 操作符，以便map可以对其元素进行排序<br />`ValueType` 是与键相关联的值的类型。<br />`mapName` 是你定义的map的名称。<br />**常用函数**

| 例子 | 说明 |
| --- | --- |
| Mp.insert(const value_type& val)； | 插入一个键值对。如果键已存在，则更新其值 |
| Mp.erase(key_type const& k); | 删除与指定键相关联的元素，释放空间 |
| Mp.find(key_type const& k); | 查找具有指定键的元素。如果找到，返回一个指向该元素的迭代器；否则，返回一个指向map末尾的迭代器 |
| Mp.size(); | 返回map中元素的数量 |
| Mp.empty(); | 如果map为空，则返回true |
| Mp.operator[]; | 使用键作为索引访问元素。如果键不存在，则插入一个具有该键的新元素，并将其值初始化为ValueType()的默认构造值 |
| Mp.count(); | 统计这个下标出现的次数 |

**使用方法**<br />**创建 map**<br />创建一个空的 map，键类型为 int，值类型为 std::string
```cpp
map<int, string> myMap; 
//  key  value
```
or 使用初始化列表
```cpp
map<int, string> myMap2 = {
    {1, "one"},
    {2, "two"},
    {3, "three"}
};
```
**插入元素**<br />1.使用下标操作符`[]`（如果键不存在，则插入新元素，并初始化其值为ValueType的默认值）：
```cpp
myMap[1] = "one";  
```
2.使用`insert`成员函数：
```cpp
auto result = myMap.insert(make_pair(2, "two")); 
if (!result.second) {
    // 插入失败，通常是因为键已存在  
}
```
**访问元素**
```cpp
string value = myMap[1]; // 访问键为 1 的元素的值  
```
注意：如果键不存在，则使用下标操作符会创建一个新元素，其值会被初始化为值类型的默认值<br />or<br />更安全的访问方式（验证键更安全）
```cpp
auto it = myMap.find(1);// 验证键更安全
if (it != myMap.end()) {
    string value = it->second; // 访问找到的元素的值  
}	// `myMap.first`为键，`myMap.second`为值
```
**删除元素**
```cpp
myMap.erase(1); // 删除键为 1 的元素  
```
or 使用迭代器
```cpp
auto it = myMap.find(2);
if (it != myMap.end()) {
    myMap.erase(it);
}	// 验证键更安全
```
**遍历 map**
```cpp
for (const auto& pair : myMap) {
    cout << pair.first << ": " << pair.second << endl;
}
```
or 使用迭代器  
```cpp
for (auto it = myMap.begin(); it != myMap.end(); ++it) {
    cout << it->first << ": " << it->second << endl;
}	// 验证键更安全
```
<a name="e52vL"></a>
#### Map的坑
1.会爆栈<br />如果键不存在，则使用下标操作符会创建一个新元素，其值会被初始化为值类型的默认值`0`。<br />2.无限循环<br />可以需要用`count()`去判断键是否存在，再去访问键，否则会一直新建键值对无限循环。		or `find()`
```cpp
if (mp.count()>0){code}
```
<a name="HyKom"></a>
#### unordered_map
`unordered_map`是基于`哈希表`的`map`，在使用方面和`map`没有任何区别。<br />`map`:<br />**优点**:有序性,效率十分稳定`Olog(n)`<br />`unordered_map`:<br />**优点**:查找速度非常的快近似`O(1)`<br />**缺点**:无序,插入操作的效率不如`map`<br />如果说你需要遍历整个`map`,且想要的是有序的`(for(autolx,c]:mp)`那么就用`map`，其他就用`unordered_map`<br />`unordered_map`在`codeforces`一定会TLE<br />能让你用`map`，那么大概率能用`unordered_map`，有概率会卡`unordered_map`<br />相反亦然，有的题你用`unordered_map`能过，有可能`map`会被卡
<a name="mw8ui"></a>
### 数组
> 数组最好声明在main函数的外面：<br />只有在放外面时，数组才可以开得很大；<br />放在main函数内时，数组稍大就会异常退出。

<a name="KoCiS"></a>
#### memset的使用
`memset(数组名称，需要初始化的值，数组的每个元素的大小)`<br />**注意**：memset初始化的值只能是0和-1
```cpp
signed main() {
    // 【memset(数组名称，需要初始化的值，数组的每个元素的大小)】
    int a[10];             //请注意：memset() 仅能的初始化值仅能为 0 或者 -1
    memset(a, 0, sizeof(a));
    for (auto x : a) {
        cout << x << " ";
    }
    cout << endl;
    memset(a, -1, sizeof(a));
    for (auto x : a) {
        cout << x << " ";
    }
    cout << endl;
    return 0;
}
```
**注意事项**<br />`memset`函数按字节进行操作，因此不能直接用于将整型数组（如int数组）初始化为非`0`和非`-1`之外的其他值。<br />如果需要对指针变量所指向的内存单元进行清零初始化，必须先确保这个指针变量已经指向了一个有效的地址。<br />`memset`函数只能用于字符数据类型或者无符号整型数据类型，即只能设置1字节大小的值。<br />**例题**<br />有n盏灯，编号为1~n，第1个人把所有灯打开，第2个人按下所有编号为2的倍数的开关（这些灯将被关掉），第3个人按下所有编号为3的倍数的开关（其中关掉的灯被打开，开着灯将被关闭），依此类推。一共有k个人，问最后有哪些灯开着？<br />**输入**：n和k<br />**输出：**开着的灯编号。k<=n<=1000<br />**样例输入**：7 3<br />**样例输出**：1 5 6 7
```cpp
#include<bits/stdc++.h>
using namespace std;
#define int long long
#define endl "\n"
const int N = 1e6 + 10;

signed main(){
    ios::sync_with_stdio(false);
    cin.tie(nullptr);cout.tie(nullptr);

    int n, k;
    cin >> n >> k;
    memset(a, -1, sizeof(a));//-1表示开灯

    for (int i = 2; i <= k; i++){
        for (int j = i; j <= n;j+=i){
            a[j] *= -1;
        }
    }

    for (int i = 1; i <= n;i++){
        if(a[i]==-1){cout << i << endl;}
    }
    return 0;
}
```
<a name="utllt"></a>
#### 多组样例输入
1.函数`scanf()`的返回值 就是：“所输入的数据与格式中匹配次数.”<br />简单来说就是，它返回已成功赋值的数据项数；出错时则返回`EOF`.<br />（注：`EOF(End Of File)`是一个预定义的常量，等于`-1`.）
```cpp
while(scanf("%d%d",&a,&b)==2){}
while(scanf("%d%d",&a,&b)!=EOF) {}
while(scanf("%d%d",&a,&b)!=-1) {}
while(~scanf("%d%d",&a,&b)) {}
```
2.`cin`实现的多组输入
```cpp
#include<iostream>
using namespace std;
int main(){
    int a,b,c;
    while(cin>>a>>b>>c){
        ...
    }
}
```
3.例题<br />[HDU-1021](https://vjudge.net/problem/HDU-1021#author=GPT_zh)<br />**解题代码**
```cpp
#include <iostream>
#include <cstdio>
using namespace std;
int n;
int main(){
    while (scanf("%d", &n) != EOF){
        if(n % 8 == 2 || n % 8 == 6)
            cout<<"yes"<<endl;
        else
            cout<<"no"<<endl; 
    }
    
    return 0;
}
```
<a name="lo1YH"></a>
### string 类 字符串
<a name="PhNfa"></a>
#### C语言字符串常用函数
> `strcpy`：拷贝字符串
> `strcat`：拼接两个字符串
> `strcmp`：字符串比较

<a name="i7wV4"></a>
#### string 类 语法
**常用函数**

| 例子 | 说明 |
| --- | --- |
| length(); size(); | 求长度 |
| empty(); | 判断是否为空串 |
| substr(); | 截取字符串 |
| erase(); | 删除若干个字符 |
| insert(); | 插入字符 |
| replace(); | 替换字符 |
| find(); | 寻找字符 |
| count(); | 计算字符个数 |
| stoi(); | string转int |
| to_string(); | int转string |

**string重载了一些运算符，可以直接使用**
```cpp
str1=str2;    //str1成为str2的拷贝

str1+=str2; //str2的字符数据连接到str1的尾部

str1+str2;  //将str2连接到str1的尾部，str1不改变

str1==str2;  str1!=str2; str1<str2; 
str1>str2;  str1<=str2;  str1>=str2;
//基于字典序的比较，返回布尔值，true或false
```
**字符串读取**<br />`getchar()`输入一个字符<br />`cin`能读到空格，读不到换行符<br />`getline()`可以读到换行符
```cpp
#include<iostream>
using namespace std;
int main(){
    cout<<getchar();//输入一个字符

    string s;
    cin>>s;//`cin`能读到空格，读不到换行符
    cout<<s;

    string s;
    getline(cin,s);//`getline()`可以读到换行符
    cout<<s;
}
```
`**substr()**`**截取字符串**<br />string.substr(起始位，数几个)
```cpp
int main (){
    string s="hello, world!";
    string ss1 = s.substr(2);//llo, world!
    //从2开始往后取完
    string ss2 = s.substr(2,3);//llo
    //从2开始往后取3位
    cout<<ss1<<endl<<ss2<<endl;
}
```
`**erase()**`**删除若干个字符**<br />`string.erase(起始位，数几个)`有规律地指定删除
```cpp
s1.erase(1, 2)//从1开始删2个
cout << s1 << endl;
```
`**insert()**`**插入字符**
```cpp
string.insert(要插入的位置，要插入的元素);
s1.insert(0, "1");
cout << s1 << endl;
```
`**replace()**`**替换字符**<br />string.replace(索引，要替换几个字符，替换上去的元素)
```cpp
s1.replace(0, 1, "HaHa");
cout << s1 << endl;
```
`**find()**`**寻找字符**<br />在 C++ 中，`string::npos`是一个特殊的常量值，用于表示在字符串中未找到子字符串或字符时的位置。<br />这个常量实际上是`std::string`类型所能表示的最大值，即 `std::string::size_type`的最大值。<br />由于字符串的索引是从`0`开始的，因此任何有效的索引值都小于 `std::string::npos`。
```cpp
if (s1.find("666") == string::npos) {
    cout << "找不到" << endl;
}
else {
    cout << "找到了" << endl;
}
```
`**count()**`**计算字符个数**<br />`count(string.begin(),string.end(),'要找的字符')`
```cpp
string s = "Hello world";
cout << count(s.begin(), s.end(), 'l') << endl;
```
`**string**`**和**`**int**`**相互互换**
```cpp
#include<iostream>
#include<algorithm> 
using namespace std;
int main(){
    //string 和 int 相互转换
    string s="123";
    string s2="6";
    cout<<stoi(s)+stoi(s2);
    
    int a=123,b=345;
    string s=to_string(a)+to_string(b);
    cout<<s;
} 
```
<a name="HjGx7"></a>
## 解题集
<a name="BEdRD"></a>
### 后缀表达式
![image.png](https://cdn.nlark.com/yuque/0/2024/png/44491236/1721651964946-758921d3-5904-4791-a016-a547016e79e9.png#averageHue=%23d5d5d5&clientId=u74ed7578-ebda-4&from=paste&height=853&id=uc34de694&originHeight=1280&originWidth=1143&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=129922&status=done&style=none&taskId=u40f05c4f-3200-4d2c-8384-8f292ec39bf&title=&width=762)<br />**解题代码**
```cpp
#include<bits/stdc++.h>
using namespace std;
#define int long long
vector <char> fh;
stack <int> num;
int sum(int n1, int n2, char x);
queue<char> s;
signed main() {
    string a; int cnt = 0;
    cin >> a;
    for (char n : a) {
        if (n == '@') break;
        //先对字符串处理入栈
        if (n >= '0' && n <= '9') {//如果是数据
            s.push(n);
        }
        else {//如果是符号
            if (n == '.') {//整合
                int sum = 0;
                while (!s.empty()) {
                    sum = sum * 10 + (int)s.front() - '0';
                    s.pop();
                }
                num.push(sum);
            }
            else{//计算
                int n2 = num.top();
                num.pop();
                int n1 = num.top();
                num.pop();
                int x2 = sum(n1, n2, n);
                num.push(x2);
            }
        }
    }
    cout << num.top();
    return 0;
}

int sum(int n1, int n2, char x) {
    if (x == '+')return n1 + n2;
    if (x == '-')return n1 - n2;
    if (x == '*')return n1 * n2;
    if (x == '/')
        if (n1 >= n2)return n1 / n2; 
        else return 0;
}
```
<a name="gwpYM"></a>
### 表达式括号匹配
![image.png](https://cdn.nlark.com/yuque/0/2024/png/44491236/1721652163979-9f249b54-0524-41f3-a6df-04c1c3bc90c4.png#averageHue=%23d8d8d8&clientId=u74ed7578-ebda-4&from=paste&height=744&id=u02c0d2c8&originHeight=1116&originWidth=1146&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=89381&status=done&style=none&taskId=uf18d1e5d-4d78-447f-9d67-75dd82bdb32&title=&width=764)<br />**参考代码**
```cpp
#include<bits/stdc++.h>
#include<limits.h>
#define pb emplace_back()
#define endl '\n'
#define i64 long long
#define fi first
#define se second
#define Endl endl
#define END endl
#define mod3 998244353
#define mod7 1000000007
#define de(x) cerr << #x <<" "<<x <<" ";
#define deb(x) cerr << #x <<" "<<x <<endl;
using namespace std;
void solve(){
    stack<int>of;
    string s;
    cin >> s;
    int len = s.size();
    for(int i = 0;i < len;i ++){
        if(s[i] =='@'){break;}
        else if(s[i] == '('){
            of.push(1);
        }else if(s[i] == ')'){
            if(of.empty()){cout <<"NO"<<endl;return ;}
            of.pop();
        }
    }
    cout << ((of.empty()) ? "YES" : "NO" ) <<endl;
}
int main(){
    solve();
    return 0;
}
```
**解题代码**
```cpp
#include<bits/stdc++.h>
using namespace std;
#define int long long
//priority_queue<char, vector<char>, greater<char>> fh;
stack <int> num;
//int sum(int n1, int n2, char x);
signed main() {
    string a; int cnt = 0; int flag = 1;
    cin >> a;
    for (char x: a) {
        if (x != '@') {
            if (x == '(')num.push(x);
            if (x == ')') {
                if (!num.empty())num.pop();	       
                else { flag = 0; break;  }
            }
        }
        else break;
    }
    if (num.empty()&&flag==1)cout << "YES";
    else cout << "NO";
}
```
<a name="wSaxf"></a>
### 表达式求值(计算器）
![image.png](https://cdn.nlark.com/yuque/0/2024/png/44491236/1721652409224-39e94705-55b4-48d6-865f-9cdfab6b8c1c.png#averageHue=%23d7d7d7&clientId=u74ed7578-ebda-4&from=paste&height=907&id=u7ca050fe&originHeight=1361&originWidth=918&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=90409&status=done&style=none&taskId=u88b35aa4-31af-4fb8-9520-16b49839b9b&title=&width=612)<br />**参考代码**
```cpp
#include<bits/stdc++.h>
#include<limits.h>
#define pb emplace_back()
#define endl '\n'
#define i64 long long
#define fi first
#define se second
#define Endl endl
#define END endl
#define mod 10000
#define mod3 998244353
#define mod7 1000000007
#define de(x) cerr << #x <<" "<<x <<" ";
#define deb(x) cerr << #x <<" "<<x <<endl;
using namespace std;
int main(){
    stack<i64>q;
    string s;
    cin >> s;
    int len = s.size();
    i64 cnt = 0;
    for(int i = 0;i < len;i ++){
        if(isdigit(s[i])){
            cnt = (cnt * 10 + (1LL * (s[i] - '0'))) % mod;
        }
        if( i == len-1 || !isdigit(s[i+1]) ){
            cnt %= 10000;
            q.push(cnt);
            cnt = 0;
        }
        if(s[i] == '*'){
            while(isdigit(s[i+1])){
                cnt = (cnt * 10 + (1LL * (s[i+1] - '0'))) % mod;
                i ++;
            }
            i64 top = q.top(),ans = cnt;
            ans = ans * top%mod;
            q.pop();
            q.push(ans);
            cnt = 0;
        }
    }
    i64 ans = 0;
    while(!q.empty()){
        ans = (ans + q.top()) % mod;
        q.pop();
    }
    cout << ans <<endl;
    return 0;
}
```
**解题代码**
```cpp
//简单计算机
#define _CRT_SECURE_NO_WARNINGS 1
#include<bits/stdc++.h>
using namespace std;
#define llu long long

int level(char e) {
	if (e == '*')    return 2;
	else if (e == '+')    return 1;
	else    return 0;//
}

int main() {
	stack<int> number; stack<char> symbol;
	llu x1; scanf("%lld", &x1);
	x1 = x1 % 10000;
	number.push(x1);
	char tmp;
	int flag = 0;
	while (~scanf("%c", &tmp) && tmp != '\n') {
		llu TMP; scanf("%lld", &TMP); TMP = TMP % 10000;
		flag = level(tmp);
		if (flag == 2) {
			llu X = number.top(); number.pop();
			X *= TMP;
			X = X % 10000;
			number.push(X);
			flag = 0;
		}
		else {
			symbol.push(tmp);
			number.push(TMP);
		}
	}
	while (!symbol.empty()) {
		char c = symbol.top(); symbol.pop();
		llu a = number.top(); number.pop();
		llu b = number.top(); number.pop();
		llu X = (a + b) % 10000;
		number.push(X);
	}
	llu out = number.top()%10000;
	printf("%lld", out);
	return 0;
}
```
<a name="CRXOS"></a>
### 约瑟夫问题
![image.png](https://cdn.nlark.com/yuque/0/2024/png/44491236/1721652608953-011278cf-9633-4e52-8f48-4b7480d72953.png#averageHue=%23d6d6d6&clientId=u74ed7578-ebda-4&from=paste&height=526&id=u18117ca0&originHeight=789&originWidth=921&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=52314&status=done&style=none&taskId=u4b07246b-f6b6-4d3e-9cbc-a25d928f86b&title=&width=614)<br />**解题代码**<br />[P1996 约瑟夫问题](https://www.luogu.com.cn/problem/P1996)
```cpp
#include<bits/stdc++.h>
using namespace std;
int main(){
    int n,m;int tmp;
    cin>>n>>m;
    queue <int> q;
    for (int i = 1; i <= n; i++)
        {
            q.push(i);
        }
    while (!q.empty())
        {
            tmp++;
            if(tmp%m!=0){
                q.push(q.front());
                q.pop();
            }
            else{
                cout<<q.front()<<" ";
                q.pop();
            }
        }
    return 0;
}
```
<a name="iDGv5"></a>
### 堆
![image.png](https://cdn.nlark.com/yuque/0/2024/png/44491236/1721652691852-514ea9e2-07db-478d-a197-3025a78dcb30.png#averageHue=%23d6d6d6&clientId=u74ed7578-ebda-4&from=paste&height=759&id=uc9b0ad59&originHeight=1139&originWidth=918&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=82333&status=done&style=none&taskId=u8b05bdfa-1804-45a0-8fb9-ff1b6591707&title=&width=612)<br />**解题代码**
```cpp
#include<bits/stdc++.h>
using namespace std;
#define int long long
signed main(){
    int n;
    cin >> n;
    priority_queue<int, vector<int>, greater<int>> s;
    while (n--)
    {
        int m;
        scanf("%d", &m);
        if (m == 1)
        {
            int k;
            scanf("%lld", &k);
            s.push(k);
        }
        if (m == 2)
        {
            cout << s.top() << endl;
        }
        if (m == 3){
            s.pop();
        }
    }
    return 0;
}
```
<a name="Vv75r"></a>
### 合并果子
[P1090 [NOIP2004 提高组] 合并果子](https://www.luogu.com.cn/problem/P1090)<br />![image.png](https://cdn.nlark.com/yuque/0/2024/png/44491236/1721652819422-f53d1baa-65c1-460a-be69-54fecd1e50e9.png#averageHue=%23d4d4d4&clientId=u74ed7578-ebda-4&from=paste&height=807&id=u5afea7b1&originHeight=1210&originWidth=915&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=112321&status=done&style=none&taskId=u5ebaab95-9605-434e-b517-391051722c8&title=&width=610)<br />**解题代码**
```cpp
#include <bits/stdc++.h>
using namespace std;
const int N = 1e6 + 10;
#define ll long long int
int main() {
	int n;
	cin >> n;
	int t;
	priority_queue<int,vector<int>,greater<int> > a;
	for (int i = 0; i < n; i++) {
		cin >> t;
		a.push(t);
	}
	int sum = 0;
	for (int i = 0; i < n - 1; i++) {
		int sum1 = 0;
		sum1 += a.top();
		a.pop();
		sum1 += a.top();
		a.pop();
		sum += sum1;
		a.push(sum1);
	}
	cout << sum;
	return 0;
}
```
<a name="mjqQ1"></a>
### 中位数
![image.png](https://cdn.nlark.com/yuque/0/2024/png/44491236/1721652928285-5f43d8df-a46d-400d-a4bd-328aa1c5a7f3.png#averageHue=%23d9d9d9&clientId=u74ed7578-ebda-4&from=paste&height=737&id=ub3f3031f&originHeight=1105&originWidth=921&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=52002&status=done&style=none&taskId=u86e7ca3b-c1f1-4862-b7ea-b3705a5b600&title=&width=614)<br />**参考代码**
```cpp
#include<bits/stdc++.h>
#include<limits.h>
#define pb emplace_back()
#define endl '\n'
#define i64 long long
#define fi first
#define se second
#define Endl endl
#define END endl
#define mod3 998244353
#define mod7 1000000007
#define de(x) cerr << #x <<" "<<x <<" ";
#define deb(x) cerr << #x <<" "<<x <<endl;
using namespace std;
int main(){
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);
    int n;
    cin >> n;
    vector<int>a(n+1);
    for(int i = 1;i <= n;i ++){
        cin >> a[i];
    }
    cout << a[1] << endl;
    priority_queue<int>q1;
    priority_queue<int,vector<int>,greater<int>>q2;
    if(a[1] > a[2]){q1.push(a[2]),q2.push(a[1]);}
    else{q1.push(a[1]),q2.push(a[2]);}
    for(int i = 3;i <= n;i ++){
        int x = a[i];
        if(x < q1.top()){ q1.push(x);}
        else{ q2.push(x);}
        if(i % 2){
            while( llabs(q1.size() - q2.size()) > 1){
                if(q1.size() > q2.size()){
                    int tmp = q1.top();
                    q2.push(tmp);
                    q1.pop();
                }else{
                    int tmp = q2.top();
                    q1.push(tmp);
                    q2.pop();
                }
            }
            cout <<((q1.size() > q2.size()) ?q1.top():q2.top()) <<endl;
        }
    }
    return 0;
}
```
<a name="W26Yi"></a>
### 第 k 小整数
![image.png](https://cdn.nlark.com/yuque/0/2024/png/44491236/1721750851463-c15115cd-5941-4e18-b0b0-55aaac7a3336.png#averageHue=%23dad9d9&clientId=u877908fd-0c24-4&from=paste&height=521&id=u135efb9a&originHeight=781&originWidth=1032&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=45624&status=done&style=none&taskId=u8a322cd4-eedd-4c7b-a20a-bcc18a16c9d&title=&width=688)<br />**解题代码**
```cpp
#include <bits/stdc++.h>
using namespace std;
#define int long long
#define N 1e5 + 10
signed main(){
    int n, k;
    cin >> n >> k;
    set <int> s;
    for (int i = 0; i < n; i++)
    {
        int m;
        cin >> m;
        s.insert(m);
    }
    if (s.size() < k)
        cout << "NO RESULT" << endl;
    else
    {
        int y = 0;
        for (auto x : s)
        {
            if (s.count(x))
            {
                y++;
            }
            if (y == k)
                cout << x << endl;
        }
    }
    return 0;
}
```
<a name="nUeCb"></a>
### Andy's First Dictionary
8岁的安迪有一个梦想——他想制作自己的词典。这对他来说不是一件容易的事，因为他知道的单词数量还不够。他没有自己想好所有的话，而是有一个巧妙的想法。他会从书架上挑选一本他最喜欢的故事书，从中抄出所有独特的单词。通过按字母顺序排列单词，他就完成了！当然，这是一项非常耗时的工作，而这正是计算机程序提供帮助的地方。系统要求您编写一个程序，列出输入文本中的所有不同单词。在这个问题中，一个单词被定义为连续的字母序列，采用大写和/或小写。只有一个字母的单词也要考虑在内。此外，您的程序必须是 CaSe InSeNsItIvE。例如，“Apple”、“apple”或“APPLE”等词语必须被视为相同。<br />**Input**<br />输入文件是不超过 5000 行的文本。输入行最多包含 200 个字符。输入由 EOF 终止。<br />**Output**<br />您的输出应给出输入文本中出现的不同单词的列表，一个在一行中。单词都应为小写，按字母顺序排序。您可以确定文本中不同单词的数量不超过 5000 个。<br />**Sample Input**
```cpp
Adventures in Disneyland
Two blondes were going to Disneyland when they came to a fork in the road. The sign read: "Disneyland Left."
So they went home.
```
**Sample Output**
```cpp
a
adventures
blondes
came
disneyland
fork
going
home
in
left
read
road
sign
so
the
they
to
two
went
were
when
```
**解题代码**
```cpp
#include <bits/stdc++.h>
using namespace std;
#define int long long
#define N 1e5 + 10
signed main(){
    ios::sync_with_stdio(false);
    cin.tie(nullptr);cout.tie(nullptr);
    string s;
    set<string> set;
    while (cin >> s){
        int len=(int)s.size();
        for (int i = 0; i < len; i++)
        {
            if (isalpha(s[i])) // 检查字符串s中的第i个字符是否是字母
            {
                s[i] = (tolower(s[i])); // 如果是的话，将其转换为小写
            }
            else s[i]=' ';
        }

        stringstream iss(s);
        string word;
        // 循环读取单词，直到iss中没有更多数据
        while (iss >> word)
        {
            set.insert(word);
        }
    }
    for (auto x : set)
    {
        cout << x << endl;
    }
    return 0;
}
```
<a name="tWOSh"></a>
### 单词数
![image.png](https://cdn.nlark.com/yuque/0/2024/png/44491236/1721751309534-2a1ff901-9259-4602-b8d3-355863500165.png#averageHue=%23d4d4d4&clientId=u877908fd-0c24-4&from=paste&height=371&id=uf526abc9&originHeight=556&originWidth=1031&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=50140&status=done&style=none&taskId=u31b0bbe0-7921-470a-9e31-9623b4318a0&title=&width=687.3333333333334)<br />**解题代码**
```cpp
#include <bits/stdc++.h>
using namespace std;
#define int long long
#define N 1e5 + 10
signed main(){
    string s;
    set <string> st;
    while (getline(cin, s))
    {
        if(s=="#")break;
        st.clear(); 
        istringstream iss(s);  
        string word;   

        // 循环读取单词，直到iss中没有更多数据  
        while (iss >> word) {  
            st.insert(word);
        } 
        cout << st.size() << endl;
    }
    return 0;
}
```
<a name="rV9BX"></a>
### 学籍管理
![image.png](https://cdn.nlark.com/yuque/0/2024/png/44491236/1721751433361-bd00a3ab-76bf-47e5-aef1-4b29e256f39c.png#averageHue=%23d1d1d1&clientId=u877908fd-0c24-4&from=paste&height=475&id=ud576fd43&originHeight=713&originWidth=1039&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=92226&status=done&style=none&taskId=u7dac3e32-87ee-4a31-8412-50d29a19190&title=&width=692.6666666666666)<br />**解题代码**
```cpp
#include <bits/stdc++.h>
using namespace std;
#define int long long
#define N 1e5 + 10
signed main()
{
    int n;
    cin >> n;
    map <string, int> myMap;
    while (n--){
        int cz, cj;
        string name;
        cin>>cz;
        if (cz == 1){
            cin>>name>>cj;
            myMap[name] = cj;
            cout << "OK" << endl;
        }
        if (cz == 2){
            cin>>name;
            auto it = myMap.find(name); // 验证键更安全
            if (it != myMap.end())
            {
                int value = it->second; // 访问找到的元素的值
                cout << value << endl;
            } // `myMap.first`为键，`myMap.second`为值
            else
            {
                cout << "Not found" << endl;
            }
        }
        if (cz == 3){
            cin>>name;
            auto it = myMap.find(name);
            if (it != myMap.end())
            {
                myMap.erase(it);
                cout << "Deleted successfully" << endl;
            } // 验证键更安全
            else
            {
                cout << "Not found" << endl;
            }
        }
        if (cz == 4){
            int tmp=myMap.size();
            cout << tmp <<endl;
        }
    }
    return 0;
}
```
<a name="JwJCh"></a>
### Cities and States S
![image.png](https://cdn.nlark.com/yuque/0/2024/png/44491236/1721751505683-272d4915-f92f-48a6-843f-53451758c5c8.png#averageHue=%23d4d4d4&clientId=u877908fd-0c24-4&from=paste&height=850&id=u67638beb&originHeight=1275&originWidth=1034&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=110160&status=done&style=none&taskId=ub929ac17-4aa1-4ca7-8a1a-3c7cfb162ba&title=&width=689.3333333333334)<br />**解题代码**
```cpp
#include <bits/stdc++.h>
using namespace std;
#define int long long
#define fi first
#define se second
#define N 1e6 + 10
const long long inf=0x3f3f3f3f3f3f3f3f;
int v[1010][1010]={0};
signed main(){
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);

    int n;
    cin >> n;
    int ans = 0;
    for (int i = 1; i <= n; i++)
    {
        string a, b;
        cin >> a >> b;
        int ta = ((a[0] - 'A') * 26) + a[1] - 'A'; // city2
        int tb = ((b[0] - 'A') * 26) + b[1] - 'A'; // state
        ans += v[tb][ta];	//[state,city2]存在的数
        if (ta == tb)	 // 自检
        {
            ans -= v[ta][tb];
        }
        v[ta][tb]++; //[city2,state]存在则加一
    }
    cout<<ans;
    return 0;
}
```
<a name="snnOU"></a>
### 小明爱集合
![image.png](https://cdn.nlark.com/yuque/0/2024/png/44491236/1721751582570-c7d6da2e-6eeb-4c60-8e3d-f88720e12dfe.png#averageHue=%23d5d5d5&clientId=u877908fd-0c24-4&from=paste&height=838&id=uce74b2d9&originHeight=1257&originWidth=1035&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=112771&status=done&style=none&taskId=u0f7d56b5-3a7b-4716-8d32-7ad2ef1e71b&title=&width=690)<br />**解题代码**
```cpp
#include <bits/stdc++.h>
using namespace std;
#define int long long
#define N 1e5 + 10
signed main()
{
    ios_base::sync_with_stdio(false); 
    cin.tie(nullptr); cout.tie(nullptr);

    int t;
    cin >> t;
    while (t--)
    {
        set<int> st;
        int n, m;
        cin >> n >> m;
        int nm=n+m,k;
        while (nm--)
        {
            cin >> k;
            st.insert(k);
        }
        int xsd = (m+n-st.size()) * 100/st.size();
        printf("%lld\n", xsd);
    }
    return 0;
}
```
<a name="AkaIQ"></a>
### 名字拼写正确判别
[Problem - 1722A - Codeforces](https://codeforces.com/problemset/problem/1722/A)<br />![image.png](https://cdn.nlark.com/yuque/0/2024/png/44491236/1721824969294-1ebc2749-4fd1-4358-8983-bcc424d36e36.png#averageHue=%23dddddd&clientId=u407cc406-e6ab-4&from=paste&height=897&id=u7a08167b&originHeight=1345&originWidth=1038&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=131703&status=done&style=none&taskId=u72928af1-1c95-4cd7-b85d-d7c8936f3ac&title=&width=692)<br />**解题代码**
```cpp
#include<bits/stdc++.h>
using namespace std;
#define int long long
#define endl "\n"
const int N = 1e6 + 10;
void solve();
signed main(){
    ios::sync_with_stdio(false);
    cin.tie(nullptr);cout.tie(nullptr);//关闭同步流
    int n;
    cin>>n;
    string s;
    while(n--){
        solve();
    }
    return 0;
}

void solve(){
    int m;
    cin>>m;
    string s;
    cin>>s;
    if(m!=5){
        cout <<"NO"<<endl;
        return ;
    }
    map<char,int> map;
    for(char x:s){
        map[x]++;
    }
    if(!map['T']||!map['i']||!map['m']||!map['u']||!map['r']){
        cout<<"NO"<<endl;
        return;
    }
    cout<<"YES"<<endl;
    return;
}
```
<a name="F5aYc"></a>
### 序列1/0操作
![image.png](https://cdn.nlark.com/yuque/0/2024/png/44491236/1721825206840-b2a12ac6-af57-497f-aa29-ea2204d37355.png#averageHue=%23d8d8d8&clientId=u407cc406-e6ab-4&from=paste&height=941&id=udd78d4d9&originHeight=1411&originWidth=924&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=205058&status=done&style=none&taskId=u2d864216-8f72-41bb-b99b-dfe265ed765&title=&width=616)<br />**解题代码**
```cpp
#include<bits/stdc++.h>
using namespace std;
#define int long long
#define endl "\n"
const int N = 1e6 + 10;
void solve();
signed main(){
    ios::sync_with_stdio(false);
    cin.tie(nullptr);cout.tie(nullptr);//关闭同步流
    int n;
    cin>>n;
    string s;
    while(n--){
        solve();
    }
    return 0;
}

void solve(){
    int m;
    cin>>m;
    string s;
    cin>>s;
    if(m!=5){
        cout <<"NO"<<endl;
        return ;
    }
    map<char,int> map;
    for(char x:s){
        map[x]++;
    }
    if(!map['T']||!map['i']||!map['m']||!map['u']||!map['r']){
        cout<<"NO"<<endl;
        return;
    }
    cout<<"YES"<<endl;
    return;
}
```
<a name="IfpcO"></a>
### 副本操作
![image.png](https://cdn.nlark.com/yuque/0/2024/png/44491236/1721825336136-25131da5-08a7-41ab-8822-8043c1019029.png#averageHue=%23d8d8d8&clientId=u407cc406-e6ab-4&from=paste&height=951&id=u5f485701&originHeight=1426&originWidth=771&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=166955&status=done&style=none&taskId=ue4bea298-3531-4330-a696-30feb455f57&title=&width=514)<br />**解题代码**
```cpp
#include<bits/stdc++.h>
using namespace std;
#define int long long
#define endl "\n"
const int N = 1e6 + 10;
signed main()
{
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr); // 关闭同步流

    int n;
    cin >> n;
    for (int i = 0; i < n; i++)
    {

        int m;
        cin >> m;
        
        map<string, int> mp;
        for (int i = 0; i < m; i++)
        {
            string k;
            cin >> k;
            mp[k]++;
        }
        string name;
        int max_num = 0;
        int sum_num = 0;
        for (auto x : mp)
        {
            sum_num += x.second; // 累计总数
            if (x.second > max_num)
            { // 找最大数和其键
                max_num = x.second;
                name = x.first;
            }
        }
        int cnt = 0; // 操作次数
        while (max_num < sum_num)
        {          // 查杀
            cnt++; // fz
            cnt += max_num;
            max_num *= 2;
        }
        cnt -= (max_num - sum_num); // 操作数-超出数
        cout << cnt << endl;
    }
    return 0;
}
```
<a name="Ctjzi"></a>
### 循环位移
![image.png](https://cdn.nlark.com/yuque/0/2024/png/44491236/1721825406220-ea93f63a-2305-4066-8273-40763d19a54b.png#averageHue=%23d4d4d4&clientId=u407cc406-e6ab-4&from=paste&height=741&id=u0f67a6d9&originHeight=1111&originWidth=769&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=93945&status=done&style=none&taskId=uff6377d5-4fb7-4c00-adca-628471cc8ab&title=&width=512.6666666666666)<br />**解题代码**
```cpp
#include<bits/stdc++.h>
using namespace std;
#define int long long
#define endl "\n"
const int N = 1e6 + 10;
void solve();
signed main(){

	int t; cin >> t; getchar();
	for (int i = 0; i < t; i++) {
		stack<char> s;
		char tmp;
		int num_0 = 0;
		int chenben = 0;

		while (~scanf("%c", &tmp) && tmp != '\n') {
			if (tmp == '1') {
				s.push(tmp);
			}
			else if (tmp == '0' && s.size() == 0) {
				num_0++;
			}
			else {
				chenben += s.size()+1;
				num_0++;
			}
		}
		cout << chenben << "\n";
	}
	return 0;
}
```
<a name="SJefK"></a>
### 四舍五入
![image.png](https://cdn.nlark.com/yuque/0/2024/png/44491236/1721825491912-61012116-bb49-4a28-b528-44d3e201f645.png#averageHue=%23d4d4d4&clientId=u407cc406-e6ab-4&from=paste&height=909&id=u3649b0c6&originHeight=1364&originWidth=769&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=115888&status=done&style=none&taskId=u0e505b15-8912-40b2-a5cc-a8f35a5757d&title=&width=512.6666666666666)<br />**解题代码**
```cpp
#include <bits/stdc++.h>
using namespace std;
int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);
    int t;
    cin >> t;
    int x1 = 0;
    while (t--) {
        string s1,s2;
        cin >> s1;
        int count = 0;
        for (int i = s1.size() - 1; i >= 0; i--) {
            int x = (int)(s1[i]) - 48;
            if (x1 == 1) {
                x += 1;
                x1 = 0;
            }
            if (x >= 5) {
                if (i == 0) {
                    s2 = '1';
                    count = s1.size();
                }
                else{
                    s2 = '0';
                    count = s1.size() - i - 1;
                    x1 = 1;
                }
            }
            else {
                s2 = to_string(x) + s2;
            }
        }
        for (int i = 0; i < count; i++) {
            s2 = s2 + '0';
        }
        cout << s2 << "\n";
        x1 = 0;
    }
    return 0;
}
```
<a name="y6qM7"></a>
### 约瑟夫
![image.png](https://cdn.nlark.com/yuque/0/2024/png/44491236/1721911004985-c06f1569-5a9b-4cb3-977c-6ba1980bb8d9.png#averageHue=%23d1d1d1&clientId=u8aed69d0-dd0b-4&from=paste&height=507&id=u8c2a3133&originHeight=761&originWidth=1153&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=113710&status=done&style=none&taskId=ufea9d012-486f-483a-8ba4-556debdb7cd&title=&width=768.6666666666666)<br />**解题代码**
```cpp
#include<iostream>
using namespace std;
int a[14];
int bushu(int x){//步数
    int remain,p;
    if(a[x]) return a[x];//
    for(int i=x+1;;i++){//找步数
        for( p=0,remain=2*x;remain>x;remain--){
            p = (p + i - 1) % remain;//循环//杀人
            if(p<x) remain=0; //不杀好人
        }//找到就退出（最小步数)
        if(remain==x){//只剩下好人
            a[x]=i;
            return i;
        }
    }
    return 0;
}
int main()
{
    int k;
    while(scanf("%d",&k)==1) {
        if(k==0) break;
        else printf("%d\n",bushu(k));
    }
    return 0;
}
```
<a name="o8rjf"></a>
### 斐波那契数列2
![image.png](https://cdn.nlark.com/yuque/0/2024/png/44491236/1721911406592-0ea9d090-4d3d-44e0-be8e-9b8ef8441ea2.png#averageHue=%23d7d7d7&clientId=u8aed69d0-dd0b-4&from=paste&height=483&id=ua2bb7c8c&originHeight=724&originWidth=1152&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=54553&status=done&style=none&taskId=ua390c1f9-df0f-4fc8-85e1-094e253c304&title=&width=768)<br />**解题思路**<br />[菜鸟题解 HDU-1021 Fibonacci Again](https://pyxblog.cn/blogs/algorithm-c2-c/)<br />**解题代码**
```cpp
#include <iostream>
#include <cstdio>
using namespace std;
int n;
int main(){
    while (scanf("%d", &n) != EOF){
        if(n % 8 == 2 || n % 8 == 6)
            cout<<"yes"<<endl;
        else
            cout<<"no"<<endl; 
    }
    
    return 0;
}
```
<a name="iQYaG"></a>
### 最右边的数字
![image.png](https://cdn.nlark.com/yuque/0/2024/png/44491236/1721911525128-9e0f7b6a-f3f4-4fa4-bf0c-ef2687f885fc.png#averageHue=%23d5d5d5&clientId=u8aed69d0-dd0b-4&from=paste&height=545&id=ud3deea98&originHeight=818&originWidth=1155&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=83962&status=done&style=none&taskId=u24acd9fc-f9fd-4b02-bf4f-f59249ba893&title=&width=770)<br />**解题思路**<br />个位数4次一循环，若按n次循环会爆<br />**解题代码**
```cpp
#include<bits/stdc++.h>
using namespace std;
#define int long long
#define endl "\n"
#define N 1e6+10

signed main(){
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);

    int n;
    cin >> n;
    while(n--){
        int m;
        cin >> m;
        int x = m % 10;
        if (x == 5 || x == 6){
            cout << x << endl;
            continue;
            }
        int sum=x;
        for (int i = 0; i < (m-1)%4;i++){
            sum *= x;
        }
            cout << sum%10  << endl;
    }
    return 0;
}
```
<a name="CN0oB"></a>
### 整除的尾数
![image.png](https://cdn.nlark.com/yuque/0/2024/png/44491236/1721911642612-c18754b9-0b5b-4159-b85b-e59c862a5c4c.png#averageHue=%23d4d4d4&clientId=u8aed69d0-dd0b-4&from=paste&height=409&id=u2f51a171&originHeight=614&originWidth=1149&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=67724&status=done&style=none&taskId=u3fb9f02b-09d4-4f54-bc02-ad7fb99df5e&title=&width=766)<br />**解题代码**
```cpp
#include<bits/stdc++.h>
using namespace std;
// #define int long long;
#define endl "\n"
#define N 1e6+10

signed main(){
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);

    int s;
    int n;
    while (cin >> s >> n && !(s == 0 && n == 0)){
        s *= 100;
        bool flag = false;
        for (int x = 0; x < 100;x++)
            if ((s + x) % n == 0){

                if (flag) cout << " "; // 如果不是第一个满足条件的 x，则输出空格  
                cout << (x < 10 ? "0" : "") << x; // 如果 x 是个位数，则前面补 0 
                flag = true;
            }
        if (!flag) {  
            cout << "00"; // 如果没有找到满足条件的 x，则输出 00  
        }  
        cout << endl;
    }
    return 0;
}
```
<a name="HsnAg"></a>
### 键盘打字加密
[WERTYU](https://vjudge.net/problem/UVA-10082)<br />**题目**<br />一个常见的打字错误是将手放在键盘上，放在正确位置右侧一排。因此，“Q”被输入为“W”，“J”被输入为“K”，依此类推。您将对以这种方式键入的消息进行解码。<br />![image.png](https://cdn.nlark.com/yuque/0/2024/png/44491236/1722069462915-a8974e70-5f90-48d5-9a28-b847281b70a3.png#averageHue=%23acacac&clientId=u3754c694-ac5a-4&from=paste&height=203&id=u0a9fab88&originHeight=304&originWidth=920&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=216546&status=done&style=none&taskId=ufa838258-d037-4abf-8839-01df1007917&title=&width=613.3333333333334)<br />**输入**<br />输入由几行文本组成。每行可以包含数字、空格、大写字母（Q、A、Z 除外）或上面所示的标点符号 [反引号 （'） 除外]。输入中不表示标有单词 [Tab、BackSp、Control 等] 的键。<br />**输出**<br />您将用上面显示的“QWERTY”键盘上紧挨着左侧的字母或标点符号替换每个字母或标点符号。输入中的空格应在输出中回显。<br /> **Sample Input**
```cpp
 O S, GOMR YPFSU/
```
 **Sample Output**
```cpp
 I AM FINE TODAY. 
```
**解题代码**
```cpp
#include<bits/stdc++.h>
using namespace std;
#define int long long
#define endl "\n"
#define N 1e6+10

signed main()
{
    string n;
    while (getline(cin, n))
    {
        string a = "`1234567890-=";
        string b = "QWERTYUIOP[]\\";
        string c = "ASDFGHJKL;'";
        string d = "ZXCVBNM,./";
        for (char k : n)
        {
            if (k == ' ')
            {
                cout << ' ';
                continue;
            }
            for (int i = 0; i < (int)a.size(); i++)
            {
                if (a[i] == k)
                {
                    cout << (i > 0 ? a[i - 1] : a[i]);
                    continue;
                }
            }
            for (int i = 0; i < (int)b.size(); i++)
            {
                if (b[i] == k)
                {
                    cout << (i > 0 ? b[i - 1] : b[i]);
                    continue;
                }
            }
            for (int i = 0; i < (int)c.size(); i++)
            {
                if (c[i] == k)
                {
                    cout << (i > 0 ? c[i - 1] : c[i]);
                    continue;
                }
            }
            for (int i = 0; i < (int)d.size(); i++)
            {
                if (d[i] == k)
                {
                    cout << (i > 0 ? d[i - 1] : d[i]);
                    continue;
                }
            }
        }
        cout << endl;
    }
    return 0;
}
```
<a name="uBFJ1"></a>
### XO统计
[Score](https://vjudge.net/problem/UVA-1585)<br />**题目**<br />有一个客观的测试结果，例如“OOXXOXXOOO”。“O”表示问题的正确答案，“X”表示错误的答案。该测试的每个问题的分数都是由自身计算的，并且只有当答案正确时，它才计算出它之前连续的“O”。例如，第 10 个问题的分数是 3，它是由它自己和它的前两个连续的“O”获得的。因此，“OOXXOXXOOO”的分数是10，由“1+2+0+0+1+0+0+1+2+3”计算得出。你要编写一个程序来计算测试结果的分数。<br />**输入**<br />您的程序将从标准输入中读取。输入由 T 个测试用例组成。测试用例 T 的数量在输入的第一行中给出。每个测试用例都从一行开始，其中包含由 'O' 和 'X' 组成的字符串，字符串的长度大于 0 且小于 80。“O”和“X”之间没有空格。<br />**输出**<br />您的程序将写入标准输出。为每个测试用例打印一行。该行用于包含测试用例的分数。<br />**样例输入**
```cpp
5
OOXXOXXOOO
OOXXOOXXOO
OXOXOXOXOXOXOX
OOOOOOOOOO
OOOOXOOOOXOOOOX
```
**样例输出**
```cpp
10
9
7
55
30
```
**解题代码**
```cpp
#include<bits/stdc++.h>
using namespace std;
#define int long long
#define endl "\n"
#define N 1e6+10

signed main()
{
    int n;
    cin >> n;
    cin.ignore();
    while(n--){
        string s;
        getline(cin, s);
        int cnt = 0;
        int sum = 0;
        for(char x:s){
            if(x=='O')
                {cnt++;
            sum += cnt;}
            if(x=='X'){
                cnt = 0;
            }
        }
        cout << sum << endl;
    }

    return 0;
}
```
<a name="loOuE"></a>
### 计算0 - 9出现次数
[Digit Counting](https://vjudge.net/problem/UVA-1225)<br />**题目**<br />Trung 对他的数学作业感到厌烦。他拿起一支粉笔，开始写一系列从 1 到 N（1 < N < 10000）的连续整数。之后，他计算每个数字（0 到 9）在序列中出现的次数。例如，当 N = 13 时，序列为：<br />12345678910111213 <br />在此序列中，0 出现一次，1 出现 6 次，2 出现 2 次，3 出现 3 次，4 到 9 之间的每个数字出现一次。玩了一会儿后，Trung 又感到无聊了。他现在想写一个程序来为他做这件事。你的任务是帮助他编写这个程序。<br />**输入**<br />输入文件由多个数据集组成。输入文件的第一行包含数据集的数量，该数据集是一个正整数，不大于 20。以下几行描述了数据集。对于每个测试用例，都有一行包含数字 N。<br />**输出**<br />对于每个测试用例，在一行中按顺序写下数字 0、1、. .9 用空格分隔。<br />**样例输入**
```cpp
2
3
13
```
**样例输出**
```cpp
0 1 1 1 0 0 0 0 0 0
1 6 2 2 1 1 1 1 1 1
```
**解题代码**
```cpp
#include<bits/stdc++.h>
using namespace std;
#define int long long
#define endl "\n"
#define N 1e6+10

signed main()
{
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);

    int n;
    cin >> n;
    while(n--){
        int m;
        map<char, int> mp;
        cin >> m;
        string sum;
        for (int i=1; i <= m;i++){
            string x = to_string(i);
            sum =sum+x;
        }
        for(char p:sum){
            int x = p - '0';
            mp[x]++;
        }
        for (int i = 0; i < 9;i++){
            // char u = i;
            cout<<mp[i]<<" ";
        }
        cout << mp[9] << endl;
    }
    return 0;
}
```
<a name="uL3e4"></a>
### 子序列加密
[All in All](https://vjudge.net/problem/UVA-10340)<br />**题目**<br />您设计了一种新的加密技术，该技术通过以巧妙的方式在其字符之间插入随机生成的字符串来编码消息。由于专利问题悬而未决，我们不会详细讨论如何生成字符串并将其插入到原始消息中。但是，为了验证您的方法，有必要编写一个程序来检查消息是否真的在最终字符串中编码。<br />给定两个字符串 s 和 t，您必须确定 s 是否是 t 的子序列，即是否可以从 t 中删除字符，使得剩余字符的串联为 s。<br />**输入**<br />输入包含多个测试用例。每个字符串都由两个字符串 s 指定，t 由空格分隔的字母数字 ASCII 字符。输入由 EOF 终止。<br />**输出**<br />对于每个测试用例输出，如果 s 是 t 的子序列。<br />**样例输入**
```cpp
sequence subsequence
person compression
VERDI vivaVittorioEmanueleReDiItalia
caseDoesMatter CaseDoesMatter
```
**样例输出**
```cpp
Yes
No
Yes
No
```
**解题代码**
```cpp
#include<bits/stdc++.h>
using namespace std;
#define int long long
#define endl "\n"
#define N 1e6+10

signed main()
{
    // ios::sync_with_stdio(false);
    // cin.tie(nullptr);
    // cout.tie(nullptr);

    string n,m;
    while(cin>>n>>m){
        int x = n.size(),p=m.size();
        int flag = 0;
        for (int i = 0; i <p;i++){
            if(m[i]==n[flag]){
                flag++;
            }
            if(flag==x){
            cout << "Yes" << endl;
            break;
            }
        }
        if(flag!=x)
            cout << "No" << endl;
    }
    return 0;
}
```
<a name="ErTHr"></a>
### 学长喜欢拆分
[学长喜欢拆分](https://vjudge.net/problem/%E6%B4%9B%E8%B0%B7-U384102)<br />![image.png](https://cdn.nlark.com/yuque/0/2024/png/44491236/1722070289088-60459242-477a-469c-88ac-e09ae7c66962.png#averageHue=%23d9d9d9&clientId=u3754c694-ac5a-4&from=paste&height=593&id=ue936c047&originHeight=889&originWidth=916&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=44010&status=done&style=none&taskId=u97d4a88a-6c92-418f-9efd-da08ea86d7d&title=&width=610.6666666666666)<br />**思路**<br />因式分解（x+1)(y+1)=n+1<br />**解题代码**
```cpp
#include<bits/stdc++.h>
using namespace std;
#define int long long
#define endl "\n"
#define N 1e6+10

signed main()
{
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);

    int n;
    cin >> n;
    bool flag = false;
     for (int i = 2; i * i <= n + 1; ++i) {  
        if ((n + 1) % i == 0) {  
            int j = (n + 1) / i;
            if (i > 1 && j > 1) {
                flag = true;
            }
        }
    }
    if (flag)
        cout << "YES" << endl;
    else
        cout << "NO" << endl;

    return 0;
}
```
<a name="wl9u0"></a>
### AK比赛！
[AK比赛！](https://vjudge.net/problem/%E6%B4%9B%E8%B0%B7-U377352)<br />![image.png](https://cdn.nlark.com/yuque/0/2024/png/44491236/1722070457358-cd9cf859-9095-42bf-b97a-1a51b9552671.png#averageHue=%23d5d5d5&clientId=u3754c694-ac5a-4&from=paste&height=813&id=u8f2921f6&originHeight=1219&originWidth=917&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=98997&status=done&style=none&taskId=u0a37bd6f-7d5f-4820-a100-0c084aa58f7&title=&width=611.3333333333334)<br />**解题代码**
```cpp
#include<bits/stdc++.h>
using namespace std;
#define int long long
#define endl "\n"
#define N 1e9+10

signed main()
{
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);

    int n, k;
    cin >> n >> k;
    int a, b, sum = 0,time=0,s=0;
    for (int i = 0; i < n; i++)
    {
        cin >> a >> b;
        time =time + a + b * k;//时间点
        s= b * 20;//罚时
        sum += (time + s);
    }
    cout << sum << endl;

    return 0;
}
```
<a name="Gwezm"></a>
### 春游
[春游](https://vjudge.net/problem/%E6%B4%9B%E8%B0%B7-B3842)<br />![image.png](https://cdn.nlark.com/yuque/0/2024/png/44491236/1722070575599-11955c13-9d8a-4d3e-b011-4b0c001d994c.png#averageHue=%23d4d4d4&clientId=u3754c694-ac5a-4&from=paste&height=583&id=ude5cf1f3&originHeight=874&originWidth=922&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=66130&status=done&style=none&taskId=u21604937-33bf-40f2-8e06-6269841cf7a&title=&width=614.6666666666666)<br />**解题代码**
```cpp
#include<bits/stdc++.h>
using namespace std;
#define int long long
#define endl "\n"
#define N 1e9+10

signed main()
{
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);

    int n, m;
    cin >> n >> m;
    map<int, int,greater<int>> mp;
    for (int i = 0; i < n; i++) {
        mp[i] = 0;
    }
    for (int i = 0; i < m;i++)
    {
        int s;
        cin >> s;
        mp[s]++;
    }
    bool flag = true;
    for (int i = 0; i < n; i++)
    {
        if (mp[i]==0)
        {
            cout << i << " ";
            flag = false;
        }
    }
    if (flag)//判断是否齐
        cout << n ;
    return 0;
}
```
<a name="tPMig"></a>
### A-B 数对
[A-B 数对](https://vjudge.net/problem/%E6%B4%9B%E8%B0%B7-P1102)<br />![image.png](https://cdn.nlark.com/yuque/0/2024/png/44491236/1722070641192-e87e0c31-0fd6-4423-9e64-6eed066fac68.png#averageHue=%23d8d8d8&clientId=u3754c694-ac5a-4&from=paste&height=617&id=ub18b1c4f&originHeight=925&originWidth=924&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=56445&status=done&style=none&taskId=u91cc790f-7c3f-43c8-b500-c16a0faed91&title=&width=616)<br />**解题代码**
```cpp
#include<bits/stdc++.h>
using namespace std;
#define int long long
#define endl "\n"
#define N 1e6+10

signed main()
{
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);

    int n, c;
    cin >> n >> c;
    map<int,int,greater<int>> mp;
    for(int i=0;i<n;i++){
        int s;
        cin >> s;
        mp[s]++;
    }
    int samsun = 0;
    for (const auto &pair1 : mp){
        auto sum = pair1.first - c;
        auto it = mp.find(sum);
        if (it!=mp.end())
        {
            int x = it->second;
            samsun += pair1.second * x;
        }
       
    }
    cout << samsun << endl;
    return 0;
}
```
<a name="mStE0"></a>
### 周长与面积计算
[周长与面积计算](https://vjudge.net/problem/%E6%B4%9B%E8%B0%B7-B3994)<br />![image.png](https://cdn.nlark.com/yuque/0/2024/png/44491236/1722070738462-4f9975f9-d1a0-4870-9755-6bf168e4b929.png#averageHue=%23d8d7d7&clientId=u3754c694-ac5a-4&from=paste&height=799&id=uccb0f8d7&originHeight=1198&originWidth=768&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=56087&status=done&style=none&taskId=u58be4391-5c3d-4b7d-bf75-11748b070ad&title=&width=512)<br />**解题代码**
```cpp
#include<bits/stdc++.h>
using namespace std;
#define int long long
#define endl "\n"
#define N 1e6+10

signed main()
{
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);

    int n;
    cin >> n;
    int l=0, s=0;
    for (int i = 1; i <= n; i++){
        l += i;
        s += i * i;
    }
    l = l * 2 + 2 * n;
    cout << l << endl;
    cout << s << endl;

    return 0;
}
```

