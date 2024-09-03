const path = require('path');

console.log(path.sep);//The platform-specific file separator. '\' or '/'.

// console.log(path.win32);

const pathname = path.join('content','subfolder','text.text')
//Join all arguments together and normalize the resulting path.
console.log(pathname);

console.log(path.basename(pathname));//Return the last portion of a path. Similar to the Unix basename command.

const absolutePath = path.resolve(__dirname,'content','subfolder','text.text')
/*
The right-most parameter is considered {to}. Other parameters are considered an array of {from}.
Starting from leftmost {from} parameter, resolves {to} to an absolute path.
If {to} isn't already absolute, {from} arguments are prepended in right to left order, until an absolute path is found. If after using all {from} paths still no absolute path is found, the current working directory is used as well. The resulting path is normalized, and trailing slashes are removed unless the path gets resolved to the root directory.
@param paths — A sequence of paths or path segments.
@throws — {TypeError} if any of the arguments is not a string.

*/

console.log(__dirname);
console.log(__filename);

console.log(absolutePath);

console.log(path.normalize('////content..///subfolder//text..text'));

//Normalize a string path, reducing '..' and '.' parts. When multiple slashes are found, they're replaced by a single one; when the path contains a trailing slash, it is preserved. On Windows backslashes are used.