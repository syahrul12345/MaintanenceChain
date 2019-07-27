pragma solidity 0.5.0;

contract Hello {
	string private hello;

	constructor() public {
		hello = 'hello';
	}
	function getHello() public view returns(string memory) {
		return hello;
	}
}