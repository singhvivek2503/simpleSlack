import {EventEmitter} from 'events';

export class Socket{
    ws:WebSocket;
    ee:EventEmitter;
    constructor(ws = new WebSocket('ws://echo.websocket.org'),ee = new EventEmitter()){
        this.ws = ws;
        this.ee = ee;
        this.ws.onmessage= this.message;
        this.ws.onopen = this.open;
        this.ws.onclose = this.close;

    }

    on=(name,fn)=>{
        this.ee.on(name,fn);
    }

    off=(name,fn)=>{
        this.ee.removeListener(name,fn);
    }
    emit=(name,data)=>{
        const msg = JSON.stringify({name,data});
        this.ws.send(msg);
    }

    message=(e)=>{
        try{
            const msg = JSON.parse(e.data);
            this.ee.emit(msg.name,msg.data);
        }
        catch(err){
            this.ee.emit('error',err);
        }
       
        // if(event.name = 'channel add'){
        //   this.newChannel(event.data);
        // }
      }
      open=(e)=>{
        console.log(e);
        this.ee.emit('connect');
      }
      close=()=>{
        this.ee.emit('disconnect');
      }
}