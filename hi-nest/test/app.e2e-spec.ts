import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from './../src/app.module';
import { MoviesService } from '../src/movies/movies.service';

describe('AppController (e2e)', () => {
  let app: INestApplication<App>;
  const movie = {
    title: 'Test Movie',
    genres: ['test'],
    year: 2000,
  };

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    const service = moduleFixture.get<MoviesService>(MoviesService);
    service.create(movie);

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('<h1>Welcome To My Movie API</h1>');
  });

  describe('/movies', () => {
    const url = '/movies';
    it('GET', () => {
      return request(app.getHttpServer())
        .get(url)
        .expect(200)
        .expect([
          {
            id: 1,
            ...movie,
          },
        ]);
    });
    it('POST', () => {
      return request(app.getHttpServer()).post(url).send(movie).expect(201);
    });
    it('DELETE', () => {
      return request(app.getHttpServer()).delete(url).expect(404);
    });
  });
});
