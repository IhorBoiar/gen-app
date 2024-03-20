export const mockEmailHandler = async (): Promise<string> => {
  return new Promise((resolve: (value: string) => void, reject: (value: string) => void) => {
    setTimeout(() => {
      const random = Math.random();
      if (random <= 0.75) {
        resolve('Email is success!');
      } else {
        reject('Email already exits!');
      }
    }, 1000);
  })
}

export const mockSubmit = async (): Promise<string> => {
  return new Promise((resolve: (value: string) => void) => {
    setTimeout(() => {
      resolve('Form is success!');
    }, 1000);
  })
}