import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect(
        '[{"id":250162,"name":"Products"},{"id":250222,"name":"Spread"},{"id":250224,"name":"Breakfast"},{"id":250301,"name":"Honey"},{"id":250303,"name":"Breakfast bread"},{"id":250328,"name":"Butter"},{"id":250332,"name":"Breakfast cereal"},{"id":250333,"name":"Other nuts spread"},{"id":250378,"name":"Jam"},{"id":253921,"name":"Yeast extract"},{"id":258361,"name":"Hazelnut & cocoa spread"},{"id":274714,"name":"Chocolate candy and praline"},{"id":274734,"name":"Praline"},{"id":274736,"name":"Chocolate candy"}]',
      );
  });
});
