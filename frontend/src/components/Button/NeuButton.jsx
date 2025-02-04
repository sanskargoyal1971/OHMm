const NeuButton = ({ label, onClick }) => {
    return (

    <div className="bg-[#FCC88F] min-h-[200px] flex items-center justify-center">
  <button onClick={() => {
          
          if (onClick) onClick(); 
        }}
  className="px-6 py-2 font-medium bg-[#86370e] text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
   {label}
  </button>
</div>

    );
  };
  
  export default NeuButton;


