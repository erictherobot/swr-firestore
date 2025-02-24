import { firebase } from '@firebase/app';
import '@firebase/firestore';
import '@firebase/auth';
import '@firebase/storage';
import '@firebase/analytics';
import '@firebase/functions';

type Config = Parameters<typeof firebase.initializeApp>[0]

export class Fuego {
  public db: ReturnType<any['firestore']>
  public auth: typeof firebase.auth
  public functions: typeof firebase.functions
  public storage: typeof firebase.storage
  constructor(config: Config) {
    this.db = !firebase.apps.length
    ? firebase.initializeApp(config).firestore
    : firebase.app().firestore;
    this.auth = firebase.auth
    this.functions = firebase.functions
    this.storage = firebase.storage
  }
}
