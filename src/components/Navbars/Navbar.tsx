import { GiBrain } from 'react-icons/gi';
import { Text, Image } from '@/components';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-brown p-4 gap-[100px] mx-[170px]">
      <div className="flex items-center gap-2 ml-[-54px]">
        <GiBrain className="h-11 w-11 text-black" />
        <span className="text-black text-2xl hidden md:block lg:block xl:block">
          Trivify
        </span>
      </div>
      <div className="flex items-center gap-5 text-black">
        <Text>About Us</Text>
        <Text>Leaderboard</Text>
        <div className="flex">
          <Image
            src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80"
            alt="user profile image"
            className="w-[50px] h-[50px] rounded-full border border-[#0000007b] object-cover"
          />
          <ul className="border border-[#7c7c7c] items-center w-[1px] h-[45px] mt-[4px] rounded mx-3" />
          <Text className="font-bold pt-[10px] text-2xl">Jane</Text>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
