import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication<App>;
  const movie = {
    title: 'Test Movie',
    genres: ['test'],
    year: 2000,
  };

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
      }),
    );
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
      return request(app.getHttpServer()).get(url).expect(200).expect([]);
    });
    it('POST', () => {
      return request(app.getHttpServer()).post(url).send(movie).expect(201);
    });
    it('DELETE', () => {
      return request(app.getHttpServer()).delete(url).expect(404);
    });
  });

  describe('/movies/:id', () => {
    it('GET 200', () => {
      return request(app.getHttpServer()).get('/movies/1').expect(200);
    });
    it('GET 404', () => {
      return request(app.getHttpServer()).get('/movies/999').expect(404);
    });
    it.todo('DELETE');
    it.todo('PATCH');
  });
});
