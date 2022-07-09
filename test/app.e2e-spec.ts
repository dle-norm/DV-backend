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
        '[{"id":250162,"name":"Products","children":[{"id":250224,"name":"Breakfast"},{"id":274714,"name":"Chocolate candy and praline"},{"id":250222,"name":"Spread"}],"ancestors":null},{"id":250222,"name":"Spread","children":[{"id":250328,"name":"Butter"},{"id":258361,"name":"Hazelnut & cocoa spread"},{"id":250301,"name":"Honey"},{"id":250378,"name":"Jam"},{"id":250333,"name":"Other nuts spread"},{"id":253921,"name":"Yeast extract"}],"ancestors":{"id":250162,"name":"Products"}},{"id":250224,"name":"Breakfast","children":[{"id":250303,"name":"Breakfast bread"},{"id":250332,"name":"Breakfast cereal"}],"ancestors":{"id":250162,"name":"Products"}},{"id":250301,"name":"Honey","children":[],"ancestors":{"id":250222,"name":"Spread"}},{"id":250303,"name":"Breakfast bread","children":[],"ancestors":{"id":250224,"name":"Breakfast"}},{"id":250328,"name":"Butter","children":[],"ancestors":{"id":250222,"name":"Spread"}},{"id":250332,"name":"Breakfast cereal","children":[],"ancestors":{"id":250224,"name":"Breakfast"}},{"id":250333,"name":"Other nuts spread","children":[],"ancestors":{"id":250222,"name":"Spread"}},{"id":250378,"name":"Jam","children":[],"ancestors":{"id":250222,"name":"Spread"}},{"id":253921,"name":"Yeast extract","children":[],"ancestors":{"id":250222,"name":"Spread"}},{"id":258361,"name":"Hazelnut & cocoa spread","children":[],"ancestors":{"id":250222,"name":"Spread"}},{"id":274714,"name":"Chocolate candy and praline","children":[{"id":274736,"name":"Chocolate candy"},{"id":274734,"name":"Praline"}],"ancestors":{"id":250162,"name":"Products"}},{"id":274734,"name":"Praline","children":[],"ancestors":{"id":274714,"name":"Chocolate candy and praline"}},{"id":274736,"name":"Chocolate candy","children":[],"ancestors":{"id":274714,"name":"Chocolate candy and praline"}}]',
      );
  });
});
