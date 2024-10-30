import { type ReactElement, useEffect, useState } from 'react';

export default function AvoidUseStateOveruseBad(): ReactElement {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');

  console.info('render');

  useEffect(() => {
    setFullName(`${firstName} ${lastName}`);
  }, [firstName, lastName]);

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
