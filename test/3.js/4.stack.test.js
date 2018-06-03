const { assert } = require('chai');
const Stack = require('../../3.js/4.stack.js');

describe('', ()=>{
  it('LIFO', ()=>{

    assert.equal(s.pop(), 5);

  })

  it('stack overflow', ()=>{
    const s = new Stack(1000);

    try{
      for (let i =0; i < 1001; i++){
        s.push(i)
      }
    }catch(ex){
      error = ex;
    }
    
    assert.equal(error, null)
  })

  it('stack underflow', ()=>{
    
  })

  it('性能测试', ()=>{
    
  })
})