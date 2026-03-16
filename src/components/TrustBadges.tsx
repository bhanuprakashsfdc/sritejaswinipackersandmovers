
import { motion } from "framer-motion";
import { TRUST_BADGES } from "@/constants/constants";
import { ShieldCheck } from "lucide-react";


const TrustBadges = () => (
  <section className="py-12 border-y border-border bg-secondary/20">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {TRUST_BADGES.map((badge, i) => (
            <motion.div
              key={badge.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="text-center"
            >
              <ShieldCheck className="w-7 h-7 text-primary mx-auto mb-2" />
              <h4 className="font-heading font-bold text-foreground text-xs md:text-sm">{badge.label}</h4>
              <p className="text-muted-foreground text-[11px] mt-1">{badge.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
);

export default TrustBadges;
