class BaseLib{

    randomUserName(){
        var value = Math.floor(Math.random() * 10000000);
        return "testqa"+value;
    }
        
}

export default BaseLib;