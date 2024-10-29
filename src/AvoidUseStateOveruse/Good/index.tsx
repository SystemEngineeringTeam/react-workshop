import { type ReactElement, useState } from 'react';

export default function AvoidUseStateOveruseGood(): ReactElement {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const fullName = `${firstName} ${lastName}`;

  console.info('render');

  return (
    <main>
      <div>
        <label htmlFor="firstName">
          姓:
          <input id="firstName" onChange={(e) => { setFirstName(e.target.value); }} type="text" value={firstName} />
        </label>
      </div>

      <div>
        <label htmlFor="lastName">
          名:
          <input id="lastName" onChange={(e) => { setLastName(e.target.value); }} type="text" value={lastName} />
        </label>
      </div>

      <p>
        名前:
        {`${fullName}`}
      </p>
    </main>
  );
}
