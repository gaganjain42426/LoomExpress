import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";

const InviteSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll be in touch shortly.");
    setFormData({ name: "", email: "", phone: "", interest: "" });
  };

  return (
    <section id="invite" className="bg-muted px-6 py-24 md:py-32">
      <div className="mx-auto max-w-xl">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-3 font-sans text-sm uppercase tracking-[0.2em] text-muted-foreground">
            By Invitation
          </p>
          <h2 className="text-4xl font-light text-foreground md:text-5xl">
            Request an Invite
          </h2>
          <p className="mt-4 font-sans text-sm leading-relaxed text-muted-foreground">
            The Vimla LoomCraft Experience is available by private invitation.
            Share your details and we'll curate your journey.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="mt-12 space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <input
            type="text"
            placeholder="Full Name"
            required
            maxLength={100}
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full border-b border-border bg-transparent py-3 font-sans text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email Address"
            required
            maxLength={255}
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full border-b border-border bg-transparent py-3 font-sans text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
          />
          <input
            type="tel"
            placeholder="Phone (Optional)"
            maxLength={20}
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full border-b border-border bg-transparent py-3 font-sans text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
          />
          <select
            value={formData.interest}
            onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
            className="w-full border-b border-border bg-transparent py-3 font-sans text-sm text-foreground focus:border-primary focus:outline-none"
          >
            <option value="">Select an Experience</option>
            <option value="artisan">The Artisan's Touch — 4 Hours</option>
            <option value="soul">The Banskho Soul — 8 Hours</option>
            <option value="immersion">The Heritage Immersion — 24 Hours</option>
          </select>
          <button
            type="submit"
            className="w-full bg-primary py-4 font-sans text-xs uppercase tracking-[0.2em] text-primary-foreground transition-opacity hover:opacity-90"
          >
            Submit Request
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default InviteSection;
