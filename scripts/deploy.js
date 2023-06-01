const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory("MyEpicGame");
  const gameContract = await gameContractFactory.deploy(
    ["Thalgar Blackthorn", "Lyra Stormrider", "Galen Shadowbane", "Aria Moonshade"],
		[
			"https://i.ibb.co/8m10W8H/char2.jpg",
			"https://i.ibb.co/sPL71Pr/char1.jpg",
			"https://i.ibb.co/YhwDs4J/char3.jpg",
      "https://i.ibb.co/CWY7D6H/char4.jpg",
		],
    ["Thalgar é imponente, com porte físico robusto e uma armadura reluzente que exibe seus emblemas nobres. Empunha uma espada de duas mãos com habilidade, seus olhos penetrantes refletem sua determinação. Seus cabelos longos e barba bem aparada completam sua aparência nobre.", "Lyra é ágil e esguia, vestindo roupas escuras e leves. Ela se mistura nas sombras e empunha um arco longo com destreza. Seus olhos atentos e cabelos curtos destacam sua sagacidade e habilidade de disparar com precisão.", "Galen é esbelto e habilidoso, vestindo roupas ajustadas e escuras. Carrega uma adaga curva letal e possui olhos astutos. Seus cabelos curtos e despenteados acrescentam um ar despretensioso.", "Aria é uma mulher de estatura média, com postura ereta e uma aura de erudição ao seu redor. Ela veste um manto longo adornado com símbolos místicos, que refletem seu domínio das artes arcanas. Seus olhos brilhantes e profundos transmitem sabedoria e conhecimento acumulados ao longo de anos de estudo. Seus cabelos longos e azuis são delicadamente penteados, complementando sua aparência poderosa e elegante. A cada feitiço que ela conjura, Aria demonstra habilidade e precisão, mostrando seu domínio das magias."], // descriptions
    [220, 200, 300, 250], // HP values
    [78, 86, 57, 69], // Attack damage values
    "Ignatius the Infernal Overlord",
		"https://i.ibb.co/hHYBm8j/d812aa41-773f-488e-89da-4fc85f81e8f5.jpg",
		10000,
		45
  );
  await gameContract.deployed();
  console.log("Contrato implantado no endereço:", gameContract.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();