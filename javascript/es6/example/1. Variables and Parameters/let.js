describe("if block", function(){
    it("var should return 3", function(){

        var doWork = function(flag){

            if(flag){

                var x = 3;
            }

            return x;
        };

        expect(doWork(true).toBe(3));  // true
    });


    it("var should return 3", function(){

        var doWork = function(flag){

            if(flag){

                let x = 3;
            }

            return x;
        };

        expect(doWork(true).toBe(3));  // false, x is undefined
    }); 

});

describe("for block", function(){
	it("var should return 3", function(){
		
		var doWork = function(){
			
			for(var i = 0 ; i < 10; i++){
				
			}
			
			return i;
		};
		
		expect(doWork(true).toBe(10));  // true
	});
	

	it("var should return 3", function(){
		
		var doWork = function(){

			for(let i = 0 ; i < 10; i++){
				
			}
			
			return i;
		};
		
		expect(doWork(true).toBe(10));  // false, i is undefined
	});	

});