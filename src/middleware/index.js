import thunk from 'redux-thunk'
import logger from './logger'

import {applyMiddleware } from 'redux'

/*  The middleware is called in the order 
        it is listed in this function. The thunk action creators we're using to
         load initial date, save tweets, and toggle tweets are functions. 
         So if they go to the logger middleware before going to the thunk 
         middleware (which takes the functions and executes them, thereby 
            obtaining actions to pass to the reducers), 
            we're going to be logging function, not the actual actions.*/


export default applyMiddleware(
thunk,  // should be first
logger,

)


