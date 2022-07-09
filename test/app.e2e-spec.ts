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
        '[{"id":250162,"name":"Products","children":[{"id":250224,"name":"Breakfast"},{"id":274714,"name":"Chocolate candy and praline"},{"id":250222,"name":"Spread"}]},{"id":250222,"name":"Spread","children":[{"id":250328,"name":"Butter"},{"id":258361,"name":"Hazelnut & cocoa spread"},{"id":250301,"name":"Honey"},{"id":250378,"name":"Jam"},{"id":250333,"name":"Other nuts spread"},{"id":253921,"name":"Yeast extract"}]},{"id":250224,"name":"Breakfast","children":[{"id":250303,"name":"Breakfast bread"},{"id":250332,"name":"Breakfast cereal"}]},{"id":250301,"name":"Honey","children":[]},{"id":250303,"name":"Breakfast bread","children":[]},{"id":250328,"name":"Butter","children":[]},{"id":250332,"name":"Breakfast cereal","children":[]},{"id":250333,"name":"Other nuts spread","children":[]},{"id":250378,"name":"Jam","children":[]},{"id":253921,"name":"Yeast extract","children":[]},{"id":258361,"name":"Hazelnut & cocoa spread","children":[]},{"id":274714,"name":"Chocolate candy and praline","children":[{"id":274736,"name":"Chocolate candy"},{"id":274734,"name":"Praline"}]},{"id":274734,"name":"Praline","children":[]},{"id":274736,"name":"Chocolate candy","children":[]}]',
      );
  });
});
