import {assert} from 'chai';
import './Heap';

describe('测试堆', () => {
  // 测试递归解
  it('max-heap', () => {
    const heap = new Heap([15, 2, , 8, 12]);
    heap.maxHeapify(1);
    assert.deepEqual(heap.data)
  });

  // 测试平凡解
  
})