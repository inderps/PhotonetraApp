var Test = can.Model({
    data: function(callback){
        return $.ajax({
            url: 'http://ip.jsontest.com/',
            type: 'get',
            dataType: 'json'
        }).done(function(data){
                callback(data);
            });
    }
},{});