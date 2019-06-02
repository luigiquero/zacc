import _ from 'lodash';

const fakeResolve = (data?: any) => new Promise((res) => {
  setTimeout(res, _.random(250, 2000, false), data);
});

const fakeReject = (error: Error) => new Promise((__, rej) => {
  setTimeout(rej, _.random(250, 2000, false), error);
});

export const userService = {
  async login({ email, password }: { email: string, password: string}) {
    const validEmail = 'zacc@mail.com';
    const validPassword = 'testeteste';

    if (validEmail !== email && validPassword !== password) {
      await fakeReject(new Error('Usuário ou senha incorretos'));
    }

    await fakeResolve();
  }
};
