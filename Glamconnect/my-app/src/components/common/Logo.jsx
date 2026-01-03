const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 4C9.373 4 4 9.373 4 16C4 22.627 9.373 28 16 28C22.627 28 28 22.627 28 16C28 9.373 22.627 4 16 4Z" stroke="currentColor" strokeWidth="2" fill="none"/>
        <path d="M12 8C12 6.895 12.895 6 14 6H18C19.105 6 20 6.895 20 8V12C20 13.105 19.105 14 18 14H14C12.895 14 12 13.105 12 12V8Z" fill="currentColor"/>
        <path d="M12 18C12 16.895 12.895 16 14 16H18C19.105 16 20 16.895 20 18V24C20 25.105 19.105 26 18 26H14C12.895 26 12 25.105 12 24V18Z" fill="currentColor"/>
      </svg>
      <span className="text-xl font-bold text-black italic">GlamConnect</span>
    </div>
  );
};

export default Logo;

