import "testcafe"
import { Selector } from 'testcafe';

fixture `App8`
    .page `http://localhost:3000`;

test('Click event test', async t => {
  const button = Selector('button').withAttribute('data-testid', 'Button')
  const text = Selector('p').withAttribute('data-testid', 'Text')

  await t
    .click(button)
    .expect(text.visible).eql(true)
});
