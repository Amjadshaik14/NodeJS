// Architecture of NodeJS

/*
    -- Client makes a request to NodeJS server
    -- All the requests from clients will go to event queue
    -- Then from event Queue, the requests go to Event loop in FIFO order
    -- The requests can be of two types
        a. Blocking(Synchronous) operations
        b. Non-Blocking(Asynchronous) operations
    -- Event loops takes a request from the event loop and checks for the type of operation it is.
    -- If it is a non-blocking operation, then it processes and gives the response to the client
    -- If it is a blocking operation(Synchronous), it goes to Thread pool.
    -- If a thread(worker) is available, assigns the task and make him work and return the result.
    -- By default, there will be 4 threads(workers)
    -- You can increase the threads. 
    -- Depends on the cores of the CPU
    -- 8 core 
*/
// Good practice is to always write code in non-blocking

