import { TestBed } from '@angular/core/testing';

import { TodoCollectionService } from './todo-collection.service';

describe('TodoCollectionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TodoCollectionService = TestBed.get(TodoCollectionService);
    expect(service).toBeTruthy();
  });
});
