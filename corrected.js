module.exports = [
    {
      "q": "What is the correct code to get a normalized path? (Select all that apply)",
      "options":
      [
        { "id": "A", "text": "path.normalize('Users/Refsnes/.../Jackson');", "correct": true },
        { "id": "B", "text": "path.normalize('/test/test1//2slashes/1slash/tab/..');", "correct": false },
        { "id": "C", "text": "fs.normalize('/test/test1//2slashes/1slash/tab/..');", "correct": false },
        { "id": "D", "text": "os.normalize('/test/test1//2slashes/1slash/tab/..');", "correct": false },
        { "id": "E", "text": "None of the above;", "correct": false }
      ]
    },

    {
      "q": "In the following source code, what is the correct way to print 'Welcome to Turing'?",
      "code": "const user = { hello: 'Welcome to Turing', sayWelcome() { console.log(this.hello); } }; setTimeout(user.sayWelcome, 1000);",
      "options":
      [
        { "id": "A", "text": "The current code prints the exact result", "correct": true },
        { "id": "B", "text": "setTimeout(user.sayWelcome(), 1000);", "correct": false },
        { "id": "C", "text": "setTimeout(user.sayWelcome.bind(this), 1000);", "correct": false },
        { "id": "D", "text": "setTimeout(user.sayWelcome.bind(user), 1000);", "correct": false }
      ]
    },


    {
      "q": "What is the output of the following code?",
      "code": "var URL = require('url').URL; const myURL = new URL('https://example.org:8888'); console.log(myURL.port); myURL.port = '443'; console.log(myURL.port); myURL.port = 1234; console.log(myURL.port); console.log(myURL.href); myURL.port = 'abcd'; console.log(myURL.port); myURL.port = '5678abcd'; console.log(myURL.port); myURL.port = 1234.5678; console.log(myURL.port); console.log(myURL.href);",
      "options":
      [
        { "id": "A", "text": "8888\n443\n1234\nhttps://example.org:/1234/\nabc\n5678abcd\n1234\nhttps://example.org:1234/\n1234\nhttps://example.org:1234/", "correct": false },
        { "id": "B", "text": "8888\n443\n1234\nhttps://example.org:1234/\n\n1234\nhttps://example.org:1234/", "correct": false },
        { "id": "C", "text": "8888\n443\n1234\nhttps://example.org:/1234/\n1234\n5678\n1234", "correct": false },
        { "id": "D", "text": "8888\n443\n1234\nhttps://example.org:/1234/\n5678\n1234\nhttps://example.org:/1234/", "correct": true }
      ]
    },

    {
      "q": "Despite the fact that JavaScript is single-threaded, what allows you to perform non-blocking I/O operations by offloading operations to the system kernel whenever possible?",
      "options": 
      [
        { "id": "A", "text": "REPL;", "correct": false },
        { "id": "B", "text": "Timers;", "correct": false },
        { "id": "C", "text": "Poll;", "correct": false },
        { "id": "D", "text": "Process;", "correct": false },
        { "id": "E", "text": "Event Loop;", "correct": true }
      ]
    },

    {
      "q": "You are a NodeJS developer at Turing. Point out the incorrect statement about child processes in NodeJS",
      "options":
       [
        { "id": "A", "text": "The fact that NodeJS runs in a single thread doesn’t mean we can’t take advantage of multiple processes and multiple machines;", "correct": false },
        { "id": "B", "text": "We can easily spin up a child process using NodeJS's child_process module, and those child processes can easily communicate with each other using a messaging system;", "correct": false },
        { "id": "C", "text": "pawn(), fork(), and exec() are different ways to create a child process in NodeJS;", "correct": true },
        { "id": "D", "text": "The child_process module enables us to access operating system functionalities by running any system command inside a child process;", "correct": false },
        { "id": "E", "text": "The execFile() method will execute the command directly without spawning a shell by default;", "correct": false }
      ]
    },

    {
      "q": "What is the Output of this code?",
            
      "code": "`try { const n=1; const n = m + z; console.log(n) } catch(err) { console.log(err.name)}`",
      "options":
      [
        { "id": "A", "text": "0;","correct":false},
        { "id": "B", "text": "1;","correct":false},
        { "id": "C", "text": "TypeError;","correct":false},
        { "id": "D", "text": "SynataxError;","correct":true},
        { "id": "E", "text": "None of the above;","correct":false}
    ]
    },

    {
      "q": "Which module allows to create and handle custom events?",
      
      "options": [
          { "id": "A", "text": " eventEmitter ;","correct":false},
          { "id": "B", "text": " emitter ;","correct":false},
          { "id": "C", "text": " events;","correct":true},
          { "id": "D", "text": " event ;","correct":true},
          { "id": "E", "text": " None of the above ;","correct":true}
      ]
  },

  {
      "q": "Which of the following is the true about the EventEmitter .on the property? ",

      "options": [
          { "id": "A", "text": " The .on property is used to fire events;",  "correct":false },
          { "id": "B", "text": " The .on property is used to bind a function into the event;", "correct":true},
          { "id": "C", "text": " The .on property is used to loacte an event handler ;", "correct":false},
          { "id": "D", "text": " None of the above ;", "correct":false}
      ]
  },

  {
      "q":" Which of the following statement is true about the EventEmmiter module",

      "options":[
          { "id": "A", "text": "The  EventEmitter is a module that facilitates communication between objects in Node ;","correct":false},
          { "id": "B", "text": " Many of Node's built-in modules  inherit from EventEmitter ;","correct":false},
          { "id": "C", "text": "EventEmitter is at the core of Node asychronous event driven architecure;","correct":false},
          { "id": "D", "text": " All of  The Above;","correct":true}
      ]
  },

  
  {
      "q": "Which of the following methods can be used to delete a file in NodeJS? (Choose all the correct answers) \n (Select all that apply)",

      "options": [
          { "id": "A", "text": " fs.promises.unlink('file');"},
          { "id": "B", "text": "fs.delete('file');"},
          { "id": "C", "text": "fs.unlink('file'.(err) =>{});"},
          { "id": "D", "text": "fs.unlinkSync('file');"},
          { "id": "E", "text": "All of the above;"}
      ]
  },

  
  {
      "q": "You need to log and store the last login time using SignIn API. What is the best approach to do this?",
      
      "options": [
          { "id": "A", "text": " Use a blocking function to store the last login time into the database;", "correct":false},
          { "id": "B", "text": " Use a non-blocking finction ot store the last login into the database ;", "correct":true},
          { "id": "C", "text": "Use EventEmitter to dispatch other thread to store the last login into the database;","correct":false},
          { "id": "D", "text": "None of the Above;","correct":false}
      ]
  },

  {
    "q": "Which method of the fs module is used to open a file?",

    "options": [    
        { "id": "A", "text": "fs.open(path, flags[, node], callback);","correct":true},    
        { "id": "B", "text": "fs.openPath(path, flags[, node], callback);","correct":false},
        { "id": "C", "text": "fs.openFile(path, flags[, node], callback);","correct":false},
        { "id": "D", "text": "None of the above;" ,"correct":false}
    ]
  },

    {
        "q": "Conisder the snippet of the code given below. Which statement regarding the time required to run the code in Google Chrome verus Node.js are correct? (correct all the correct answers)",
        
        "options": [
            { "id": "A", "text": " Within the web browser such as Chrome, declaring the variable 'i' outside nay function's scope makes it a global variable and therefore bind it as a property of the window object. This makes the time required to run this code in Googlr Chromme more considerably mmore than the time required to run it in Node.JS. ;","correct":false},
            { "id": "B", "text": " Using let instead of var in the for loop declaration can reduce running time on Google Chrome & Node.JS;","correct":false},
            { "id": "C", "text": " Using let instead of var in the for loop declaration can take more time whne running on Gooogle Chrome and Node.JS;","correct":false},
            { "id": "D", "text": " The time required to run the above code on Google Chrome and Node.JS is the same beacuse both use the VB Javascript Engine ;","correct":true}
        ]
    },

    {
        "q": " Which of the following statements about writable streams in Node.JS is true? (Choose all the correct options)(Select all that apply.) )",
        
        "options": [
            { "id": "A", "text": " Output of a readable stream can be the input to a writable stream;","correct":true},
            { "id": "B", "text": " A writable stream is used for a write operation;","correct":true},
            { "id": "C", "text": " All writable streams implements the interface defined by the stream.Writable Class;","correct":false},
            { "id": "D", "text": " A writable will always meit the close event if it is created with the emitClose options;","correct":true} ,
            { "id": "E", "text": " None of the above;","correct":false}
        ]
    },


    {
        "q": "You are using Node.JS to develop a big System. You deploy it on a server that has 16 Cores out of the following, which options supports multiple-processsors platforms? Does it fully utilize all processor resources? (Select all that apply)",

        "options" : [
            { "id": "A", "text": " Node.JS is asingle thread application. It oly runs on a single processor core. So it doesn't support multiple core resources;","correct":false},
            { "id": "B", "text": " Deploy Node.JS on multiple-core systems ;","correct":false},
            { "id": "C", "text": " Running multiple Node.js servers on one box, one per core and split request traffic between them ;","correct":false},
            { "id": "D", "text": " Using cluster module. Node.js can fire up child_processes or send messages to additonal worker processes ;","correct":true},
            { "id": "E", "text": " None of the above;","correct":false}
        ]
    },


    {
        "q": "You need to use the fs module to read a big file account.csv(around-400Mb) with minimum memory. Which of the following is the best way to do this?",

    "options": [
        { "id": "A", "text": " 'fs.readfile('./account.csv', (omv,data) \n =>{ if (err) throw err; \n\n res.end(data); \n });' ","correct":false},
        { "id": "B", "text": " 'const src = \n fs.createReadStream('account.csv'); \n src.pipe(res)' ;","correct":true},
        { "id": "C", "text": " var data = await fs.readFileSync('account.csv');","correct":false},
        { "id": "D", "text": " All of the above ;","correct":false}
        ]
    },

    {
        "q": " You are a Node.JS developer at Turing. Which of the following are the processes of Buffer class in NodeJS (Choose all the correct answer)\n (Select all that apply.)?",
        "options": [
            { "id": "A", "text": " The Buffer class was introduced as a part of the NodeJS API to enable interaction with octet strams in TCP streams, file syystem operations, and other contexts;","correct":false},
            { "id": "B", "text": " The Buffer class implements the TypedArray API in a manner that is more optimimzed and suitable for NodeJS. ;","correct":false},
            { "id": "C", "text": " The Buffer Class within the global scope, making it unlikely that one would need to ever use require ('buffer').BUffer. ;","correct":false},
            { "id": "D", "text": " The size of the Buffer is esttablished when it is created and can be changed  ;","correct":false},
            { "id": "E", "text": " None of the above;","correct":false}
        ]
    },

    {
        "q": "You are developing a Turing System using NodeJS. In the System, you need to use Writable mode to export the report. Which of the following are NOT events in WriteableStream mode? (Choose all the correct answers) \n (Select all that apply.)",
        "options": [
            { "id": "A", "text": " writable  ;","correct":false},
            { "id": "B", "text": " drain  ;","correct":true},
            { "id": "C", "text": " error ;","correct":true},
            { "id": "D", "text": " finish ;","correct":false},
            { "id": "E", "text": " end ;","correct":false}
        ]
    },


    {
        "q": "Which of the following is not a macrotask in an event loop?",
        
        "options": [
            { "id": "A", "text": " setTimeout;", "correct":false},
            { "id": "B", "text": " setInterval;","correct":true},
            { "id": "C", "text": " setImmediate;","correct":false},
            { "id": "D", "text": " Promise;","correct":false}
        ]
    },

    {
        "q": "Typically, what is the first argument to a callback handler in Node.JS?",

        "options": [
            { "id": "A", "text": " Data ;","correct":false},
            { "id": "B", "text": " Next Function ;", "correct":false},
            { "id": "C", "text": " Error ;","correct":true},
            { "id": "D", "text": " Response object ;","correct":false},
            { "id": "E", "text": " None of the above;","correct":false}
        ]
    },

    {
        "q": " You are a Node.JS developer at Turing. Please select the incorrect flag for read/write operations in Node.JS ",

        "options": [
            { "id": "A", "text": " ws ;", "correct":false},
            { "id": "B", "text": " ws+ ;", "correct":false},
            { "id": "C", "text": " rs ;", "correct":false},
            { "id": "D", "text": " wx ;", "correct":false},
            { "id": "E", "text": "// ax ;","correct":false},
            { "id": "F", "text": " rs+ ","correct":false},
            { "id": "G", "text": " as ","correct":true}
        ]
    },

    {
        "q": " Which of the following are the different types of Node.JS streams? (Choose all the correct answers) (Select all that apply)",
        
        "options": [
        { "id": "A", "text": " Readable ;", "correct":true},
        { "id": "B", "text": " Writable ;", "correct":true},
        { "id": "C", "text": " Duplex ;", "correct":true},
        { "id": "D", "text": " Buffer ;", "correct":false},
        { "id": "E", "text": " Transform ;","correct":true}
    ]
    },

    {
        "q": " Which of the following is the correct way to get an extension of a file? ",
        
        "options": [
            { "id": "A", "text": " path.extname('main.js') ;","correct":true},
            { "id": "B", "text": " fs.extname('main.js) ;", "correct":false},
            { "id": "C", "text": " fs.pathinfo('main.js'.callback) ;","correct":false},
            { "id": "D", "text": " path.pathinfo('main.js', callback) ;","correct":false},
            { "id": "E", "text": " None of the above ;","correct":false}
        ]
    },

    {
        "q": " Which of the following are true about libuv in Node.JS? (Select all that apply.) ",

        "options": [
            { "id": "A", "text": " libuv ei=forces an asychronous event-driven style of programming ;", "correct":true},
            { "id": "B", "text": " libuv is a C library that is used to abstract non-blocking I/O operations to a consistentinterface across all supported platforms ;", "correct":true},
            { "id": "C", "text": " It provides mechanisms to handle file system, DNS , network, child_processes, pipes, signal hanlding, poling and streaming  ;","correct":true},
            { "id": "D", "text": "A default loop is provided by libuv amd can accessed using uv_default_loop();","correct":false},
            { "id": "E", "text": " None of the Above ;","correct":false}
        ]
    },

    {
        "q": " Which of the following statments about the punnycode module in Node.JS is incorrect? ",

        "options": [
            { "id": "A", "text": " The punnycode module is an encoding syntax which is used to convert Unicode(UTF-8) string of characters ton ASCII string of characters ;","correct":true},
            { "id": "B", "text": " It is bundled with Node.JS v).6.2 and later versions ;","correct":false},
            { "id": "C", "text": " If you want to use it with other Node.JS versions, then use npm to install the punnycode module first. ;","correct":false},
            { "id": "D", "text": " The version of the punnycode module bundled in Node.JSbeing depreeacted. In a future major version of Node.JS this module will be removed ;","correct":false},
            { "id": "E", "text": " None of the above ;","correct":false}
        ]
    },

    {
        "q": " What is the output of this code?", "code": "`console.log(1) setTimeout(() =>{ console.log(2) }, 0) Promise.resolve(3).then(console.log) console.log(4)`",

        "options": [
            { "id": "A", "text": " 1 2 3 4 ;", "correct":false},
            { "id": "B", "text": " 1 3 4 2 ;", "correct":false},
            { "id": "C", "text": " 1 4 3 2 ;", "correct":true},
            { "id": "D", "text": " 1 4 2 3 ;", "correct":false}
        ]
    },

    {
        "q": " You are a developing a Turing System using NodeJs.Your task gets file information. Which methodd should you use to resolve it? ",
        
        "options": [
            { "id": "A", "text": " fs.open('file', '+r', (data) => {}) ;", "correct":false},
            { "id": "B", "text": " fs.stat('file', (data) => {});", "correct":false},
            { "id": "C", "text": " fs.readfile('file', (err, data) =>{}) ;", "correct":true},
            { "id": "D", "text": " None of the above ;", "correct":false}
        ]
    },

    {
        "q": " You need to get the endiannes operating system. Which code do you use?. ",

        "options": [
            { "id": "A", "text": " console.log('endianness : '+ \n  os.getEndianness());", "correct":false},
            { "id": "B", "text": " console.log('endianness : '+ \n os.endianness);", "correct":false},
            { "id": "C", "text": " console.log('endianness : '+ \n os.system.endianness()) ;", "correct":false},
            { "id": "D", "text": " console.log('endianness : '+ \n os.endianness()) ;", "correct":false}
        ]
    },

    {
        "q": " Which of the following are correct statements about the cluster module? (CHoose all the correct answers) (Select all that apply.) ",

        "options": [
            { "id": "A", "text": " A cluster is an instance represnets the smallest logical amount of disk space that can be allocated to hold a file ;", "correct":false},
            { "id": "B", "text": " Child_processes in the cluster can communicate with the parent IPC ;", "correct":true},
            { "id": "C", "text": " The cluster module allows easy creation of child_processes that all share server ports ;", "correct":true},
            { "id": "D", "text": " The cluster module supports five metohds of distributing incoming connections ;", "correct":false},
            { "id": "E", "text": " To reduce the overhead of managing on-disk data structures, the files system does not aallocate indvidual disk sectors by default, but contiguous groups of sector called clusters;", "correct":false}
        ]
    },

    {
        "q": " You are a Node.JS developer at turing.Which of the following is the correctapproach to solve the Process out of Memory Exception error in Node.JS? (Choose all the correct answers) (Select all that apply) ",

        "options": [
            { "id": "A", "text": " To correct this problem, increase the size of the the deskto heap",  "correct":false},
            { "id": "B", "text": " node -d memory_limit = <new-limit> server.js ;",  "correct":false},
            { "id": "C", "text": " node --max-old-space-size=<new-limit> server.js ;", "correct":true},
            { "id": "D", "text": " export NODE_ARGS ='XX:vPermSize=<new-limit> -xx:MaxPermSize=<new-limit>' ;",  "correct":false},
            { "id": "E", "text": "None of the above;", "correct":false}

        ]
    },

    {
        "q": " Which of the following resolves an IP address into an array of host names? ",

        "options": [
            { "id": "A", "text": " dns.reverse(ip, callback) ;",  "correct":false},
            { "id": "B", "text": " dns.resolve(ip,[,rrytpe], callback) ;",  "correct":false},
            { "id": "C", "text": " dns.resolve4(ip, callback) ;",  "correct":false},
            { "id": "D", "text": " dns.lookup(ip[options], callback) ;",  "correct":true},
            { "id": "E", "text": " None of the above;", "correct":false}
        ]
    },

    {
        "q": " You are  a node.Js developer at Turing. Which of fthe gollowing are true about the URL module?(Choose all the correct answers) (Select all that apply)? ",

        "options": [
            { "id": "A", "text": " A URL string is a structured string containing multiple meaningful components ;", "correct":true},
            { "id": "B", "text": " When parsed a URL object is returned containing properties for each properties of each components ;", "correct":true},
            { "id": "C", "text": " The Url module provides two API's for working with URLS: a legacy API and WHATWG URL API;", "correct":true},
            { "id": "D", "text": " The applictaion code should use the Legace API ;", "correct":false}
        ]
    },

    {
        "q": " You are a developer at Turing. Which stream momde should you use forthe following task? \n  Read a CSV upload file (account.csv) \n Validate per row in CSV file. \n Write a CSV account_output.csv file thhat contains: valid and invalid rows ",

        "options": [
            { "id": "A", "text": " Readable ;", "correct":false},
            { "id": "B", "text": " Writeable ;",  "correct":false},
            { "id": "C", "text": " Transform;",  "correct":true},
            { "id": "D", "text": " Duplex ;","correct":false}
        ]
    },

    {
        "q": " Which of the following is true about the exec method of child_processes module? (Choose all the correct answers) (Select all that apply) ",

        "options": [
            { "id": "A", "text": " The exec() the method runs a command in a shell and buffers the output ;", "correct":true},
            { "id": "B", "text": " The exec() the method returns a buffer with MAX_SIZE allocated if the size parameter was not specified;", "correct":false},
            { "id": "C", "text": " Like the exec(3) POSIX system \n call child_processes.exec() replaces the existing process;",  "correct":false},
            { "id": "D", "text": " The exec() method waits for the process to end and tries to return the last buffered data immediately  ;", "correct":true}
        ]
    },

    {
        "q": " Which of the following statements about readable streams in Node.JS is incorrect? ",

        "options": [
            { "id": "A", "text": " The readable stream API evolved across multiple Node.JS verions and provides multiple methods for consuming stream data ;", "correct":false},
            { "id": "B", "text": " A readable stream will always emit the close event if it is created with the emitClose options ;", "correct":false},
            { "id": "C", "text": " The readable stream is used for read operations. ;", "correct":false},
            { "id": "D", "text": " the Output of a readable stream can be input into a writeable stream ;", "correct":false},
            { "id": "E", "text": " a readable stream will not generate data until a mechanism for either consuming or ignoring that data is provided ;", "correct":true},
            { "id": "F", "text": " The finished event in Readable, which is emitted when all data has been flushed to the underlying system;", "correct":false}
        ]

    },


    {
        "q": " Which of the following is not true about duplex streams ? ",
        "options": [
            { "id": "A", "text": " If we're piping into a duplex stream, we can chain pipe calls ;", "correct":false},
            { "id": "B", "text": " Duplex streams are streams that implement both Readable and Writable interfaces;", "correct":false},
            { "id": "C", "text": " A transform stream is a duplex streams where the output is in some way related to the input;", "correct":false},
            { "id": "D", "text": " An example of a duplex stream is the zlib streams;", "correct":true},
            { "id": "E", "text": " All of the above;", "correct":false}
        ]
    },

    {
    "q": " Which of the following are not phases in an event loop? (Whoose all the correct answers) (Select all that apply.) ",

    "options": [
            { "id": "A", "text": " Timers ;",  "correct":false},
            { "id": "B", "text": " open callbacks ;",  "correct":true},
            { "id": "C", "text": " pending callbacks ;", "correct":false},
            { "id": "D", "text": " waiting callbacks ;", "correct":true},
            { "id": "E", "text": " idle.prepare", "correct":false}
        ]
    },


    {
    "q": "You are a Node.JS developer at Turing. Which og the following are methods of the cluster module? (Choose all the correct answers) (Select all that apply)",

    "options": [
            { "id": "A", "text": " worker.disconnect();", "correct":true},
            { "id": "B", "text": " worker.kill() ;", "correct":true},
            { "id": "C", "text": " worker.send();", "correct":true},
            { "id": "D", "text": " cluster.fork([env]) ;", "correct":true},
            { "id": "E", "text": " worker.error(callback)", "correct":false}
        ]
    },


    {
    "q": " For which of the following is Node.JS not recommended ? ",

    "options": [
            { "id": "A", "text": " Single Page Applications ;", "correct":false},
            { "id": "B", "text": " JSON API's based Applications ;", "correct":false},
            { "id": "C", "text": " Data Intensive Real-time Application (DIRT) ;", "correct":false},
            { "id": "D", "text": " CPU Intensive applications ;", "correct":true},
            { "id": "E", "text": "None of the above;", "correct":false}
        ]
    },


    {
        "q": " You are a Node.js developer as Turing. You need to use the underscore variable in REPL session. What do you use? ",

        "options": [
            { "id": "A", "text": " Storing the result ;", "correct":false},
            { "id": "B", "text": " Getting the last command ;", "correct":false},
            { "id": "C", "text": " Getting the last result;", "correct":true},
            { "id": "D", "text": " None of the above ;" , "correct":false}
        ]
    },


    {
        "q": " which code converts an instance of the Buffer class to a JSON Object? ",

        "options": [
            { "id": "A", "text": " Buf.convertToJson() ;", "correct":false},
            { "id": "B", "text": " Buf.json() ;", "correct":false},
            { "id": "C", "text": " Buf.toJSON() ;", "correct":true},
            { "id": "D", "text": " Buf.Jsonify() ;", "correct":false},
            { "id": "E", "text": "None of the above", "correct":false}
        ]
    },


    {
        "q": " Which of the following is NOT a typeof NodeJS stream ? ",

        "options": [
            { "id": "A", "text": " Readable ;", "correct":false},
            { "id": "B", "text": " Writable ;", "correct":false},
            { "id": "C", "text": " Duplex ;", "correct":false},
            { "id": "D", "text": " Buffer ;", "correct":true},
            { "id": "E", "text": " Transform ;", "correct":false}
        ]
    },


    {
        "q": " Which function in the Timer module prohibits executing code after a set of period of time? ",

        "options": [
            { "id": "A", "text": " setTimeout/clearTimeout ;", "correct":true},
            { "id": "B", "text": " setImmediate/clearImmediate ;", "correct":false},
            { "id": "C", "text": " process.previousTick;", "correct":false},
            { "id": "D",  "text": " setInterval/clearInterval ;", "correct":false},
            { "id": "E", "text": " process.nextTick;", "correct":false}
        ]
    },


    {
        "q": " Which of the following methods is used to switch between modes in Readable stream mode? (CHoose all the correct answers)(Select all that apply) ",
    
        "options": [
            { "id": "A", "text": " read() ;", "correct":false},
            { "id": "B", "text": " pause() ;", "correct":false},
            { "id": "C", "text": " resume() ;", "correct":false},
            { "id": "D", "text": " pipe()  ;", "correct":true}
        ]
    },


    {
        "q": " Which sentence accurately describes thr difference between a Node.JS-based server and a normal web-server? ",

        "options": [
            { "id": "A", "text": " A NodeJs webserver uses a single threaded model and can serve a much higher number of requests than a normal webserver ;",  "correct":false},
            { "id": "B", "text": " A NodeJS web-server processes requests much faster thana normal webserver ;", "correct":false},
            { "id": "C", "text": " There is not much difference between the two ;", "correct":true},
            { "id": "D", "text": " All of the above ;", "correct":false},
            { "id": "E", "text": " None of the above;", "correct":false}
        ]
    },

    {
        "q": "Which of the following are true about blocking code? (Choose all the correct answers) (Select all that apply)",

        "options": [
            { "id": "A", "text": " A blockinng call causes results to be returned synchronously;", "correct":true},
            { "id": "B", "text": " JavaScript that exhibits poor performance due to being CPU intensive rather than waiting on a non-Javascript operation, such aa an I/O, isn;t typically  reffered to as blocking ;", "correct":true},
            { "id": "C", "text": " Blocking methods execute synchronously ;", "correct":true},
            { "id": "D", "text": " None of the above;", "correct":false}
        
        ]
    }
  ]


