class Event extends EventTarget{
    emit(event,target){
        this.dispatchEvent(new CustomEvent(event,{detail:target}));
    }
    on(event, callback) {
        this.addEventListener(event, (e) => callback(e.detail));
      }
    off(event, callback) {
        this.removeEventListener(event, (e) => callback(e.detail));
    }
}
const modalEvent=new Event();
export default modalEvent;
