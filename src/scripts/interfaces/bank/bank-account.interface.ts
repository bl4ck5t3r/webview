import {BankAccountCharacterAccessInterface} from "./bank-account-character-access.interface";
import {BankAccountGroupAccessInterface} from "./bank-account-group-access.interface";
import {BankHistoryEntryInterface} from "@/scripts/interfaces/bank/bank-history-entry.interface";

export interface BankAccountInterface {
    id: number;
    status: number;
    type: number;
    amount: string;
    bankDetails: string;
    characterAccesses: BankAccountCharacterAccessInterface[];
    groupAccesses: BankAccountGroupAccessInterface[];
    history: BankHistoryEntryInterface[];
}