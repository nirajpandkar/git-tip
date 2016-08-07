var chai = require('chai');
var expect = chai.expect;
var gtip = require("./index");
var tips = require("./tips.json");

describe("gtip",function(){
    describe("randomTip",function(){
        it("should return an object with tip(git command) and title",function(){
            var randomTip =gtip.random();
            expect(randomTip).to.be.an('object');
        });
        it("should return an object from available tips.json",function(){
            var randomTip =gtip.random();
            expect(tips).to.include(randomTip);
        });
    });

    describe("allTips",function(){
        it("should return all the tips",function(){
            var allTips = gtip.all();
            for(var i=0;i<allTips.length;i++){
                expect(tips).to.include(allTips[i]);
            }

        })
    });

    describe("keywordTips",function(){
        it("should return only those tips with keyword in title",function(){
            var keywordTips = gtip.keyword("bypass")[0];
            expect(keywordTips.title.toLowerCase()).to.contain('bypass');
        })
    })
});