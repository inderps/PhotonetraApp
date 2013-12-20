var host = {
    get: function(){
        var server;
        if(window.location.host.indexOf("localhost") == -1){
            server = "http://photonetra_service.ap01.aws.af.cm/";
        }
        else{
            server = "http://localhost:4567/"
        }
        return server;
    }
}