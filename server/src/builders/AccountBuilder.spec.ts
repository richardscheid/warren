import { AccountBuilder } from './AccountBuilder';

describe('Account builder', () => {
  it('should create a account', () => {
    const account = new AccountBuilder().balance(10).build();

    expect(account).not.toBeNull();
    expect(account.balance).toBe(10);
  });
});
