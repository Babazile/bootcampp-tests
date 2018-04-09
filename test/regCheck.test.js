describe('regCheck' , function(){
    it('it should return true if the regNo is from Gauteng' , function(){
        assert.equal(regCheck('12254 GP'),true);
    });
    it('it should return true if the regNo is from Limpopo' , function(){
        assert.equal(regCheck('189-012 L'), true);
    });
    it('it should return true if the regNo is from Eastern  Cape' , function(){
        assert.equal(regCheck('75757 EC'), true);
    });
    it('it should return true if the regNo is from Durban' , function(){
        assert.equal(regCheck('67566 ND'), true);
    });
});
