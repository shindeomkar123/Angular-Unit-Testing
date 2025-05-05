import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { PostService } from './post.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

describe('Post Service', () => {
  let postService: PostService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PostService, HttpClient],
    });
    postService = TestBed.inject(PostService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should create service', () => {
    expect(postService).toBeTruthy();
  });

  it('should get all the posts', () => {
    const mockPosts = [{ id: 'p1' }];
    postService.getPosts().subscribe((data) => {
      expect(data.length).toBe(1);
    });
    const mockReq = httpMock.expectOne(
      'https://jsonplaceholder.typicode.com/posts'
    );
    expect(mockReq.request.method).toBe('GET');
    mockReq.flush(mockPosts);
  });

  it('should get post detail', () => {
    const postId = 1;
    const mockDetail = { id: 1 };
    postService.getPost(postId).subscribe((data) => {
      expect;
    });
    const mockReq = httpMock.expectOne(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    expect(mockReq.request.method).toBe('GET');
    mockReq.flush(mockDetail);
  });
});
