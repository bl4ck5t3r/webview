import alt from '@/scripts/services/alt.service';
import LiteEvent from '@/scripts/systems/lite-event'
import {MailAccountInterface} from "@/scripts/interfaces/mail/mail-account.interface";

export default class MailingService {
    private static instance: MailingService;

    private constructor() {
        // do something construct...
    }

    static getInstance() {
        if (!MailingService.instance) {
            MailingService.instance = new MailingService();
            // ... any one time initialization goes here ...
        }
        return MailingService.instance;
    }

    get hasMailAccount() {
        return this.mailAccounts.length != 0;
    }

    get getMailAccounts() {
        return this.mailAccounts;
    }

    get onChange() {
        return this.onMailAccountsChanged.expose();
    }

    private readonly onMailAccountsChanged = new LiteEvent<MailAccountInterface[]>();
    private mailAccounts: MailAccountInterface [] = [];

    public listenToEvents(): void {
        alt.on("mailing:updatemailaccounts", (args: any[]) => this.update(args[0]));
    }

    private update(mailAccounts: MailAccountInterface[]): void {
        this.mailAccounts = mailAccounts;
        this.onMailAccountsChanged.trigger(this.mailAccounts);
    }
}