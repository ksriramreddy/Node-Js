/*

Libuv :

Libuv has pool of thread. when ever nodejs encounter an async function itwill be transfered to Libuv for execution and in the mean time the node will continue executing other functions

Libuv is a multi-platform support library for writing asynchronous I/O (Input/Output) and network applications in Node.js. It provides a portable, event-driven, and asynchronous I/O API that is efficient and easy to use.

Key features of Libuv:

1. Asynchronous I/O: Libuv provides a high-performance, event-driven I/O model that allows Node.js applications to perform non-blocking I/O operations efficiently.
2. Non-blocking callbacks: Libuv uses non-blocking callbacks to handle I/O operations and provide a responsive user interface. This allows Node.js applications to handle multiple I/O operations simultaneously without blocking the event loop.
3. Support for various operating systems: Libuv supports Windows, macOS, Linux, and FreeBSD. It provides APIs and event loop extensions for each platform to provide a consistent and efficient I/O API.
4. Low-level access: Libuv provides low-level access to the operating system's APIs, allowing developers to build custom I/O handling and network protocols.
5. Portable and scalable: Libuv is designed to be portable and scalable, allowing developers to write applications that can be run on different operating systems without rewriting the entire application.

*/