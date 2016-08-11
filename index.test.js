var chai = require('chai');
var expect = chai.expect;
var gittip = require("./index");
var tips = require("./tips.json");

describe("git-tip",function(){
    describe("randomTip",function(){
        it("should return an object with tip(git command) and title",function(){
            var randomTip =gittip.random();
            expect(randomTip).to.be.an('object');
        });
        it("should return an object from available tips.json",function(){
            var randomTip =gittip.random();
            expect(tips).to.include(randomTip);
        });
    });

    describe("allTips",function(){
        it("should return all the tips",function(){
            var allTips = gittip.all();
            for(var i=0;i<allTips.length;i++){
                expect(tips).to.include(allTips[i]);
            }

        })
    });

    describe("keywordTips",function(){
        it("should return only those tips with keyword in title",function(){
            var keywordTips = gittip.keyword("bypass")[0];
            expect(keywordTips.title.toLowerCase()).to.contain('bypass');
        })
    })
});