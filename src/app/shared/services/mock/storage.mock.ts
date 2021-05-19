export class StorageMock implements Storage {
  public length = 0;
  public clear(): void { return null as any; }
  public getItem(key: string): string { return null as any; }
  public key(index: number): string { return null as any; }
  public removeItem(key: string): void { return null as any; }
  public setItem(key: string, value: string): void { return null as any; }
}
