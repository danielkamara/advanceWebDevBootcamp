# The Stack And The Heap

# Objectives
* Describe what the stack is
* Describe a stack frame
* Describe the heap

# What is the stack???
* An ordered data structure
* Keeps track of function invocations
* Part of the JavaScript runtime (you don't access it diectly)

# How Your Code Changes The Stack
* Whenever you invoke a function, the details of the invocation are saved to the top of the stack (pushed to the top)

* Whenever a function returns, the information about the invocation is taken off the top of the stack (popped off to the top)

# Stack Frame Contents
* The function that was invoked
* The parameters that were passed to the function.
* Keeps track of the current line number

# Stack Definition
* An ordered set of stack frames
* Most recently invoked functions is on the top of the stack
* The bottom of the stack it the first function invoked
* The stack is processed from top to bottom

# Heap Definition
* An area of memory where your data is stored