import ButtonShevronLucide from "@/components/ui/button-shevron-lucide";

const Landing = () => {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center gap-2">
            <div className="p-6 font-playfair-display text-6xl font-bold text-slate-800 dark:text-white/70">
                Landing page
            </div>
            <ButtonShevronLucide>Go!!</ButtonShevronLucide>
        </div>
    );
};

export default Landing;
