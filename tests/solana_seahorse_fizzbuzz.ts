import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { SolanaSeahorseFizzbuzz } from "../target/types/solana_seahorse_fizzbuzz";

describe("solana_seahorse_fizzbuzz", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.SolanaSeahorseFizzbuzz as Program<SolanaSeahorseFizzbuzz>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
