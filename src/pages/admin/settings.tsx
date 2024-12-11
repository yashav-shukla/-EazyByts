import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'sonner';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Textarea } from '../../components/ui/textarea';
import { useSettingsStore } from '../../store/settings';

const settingsSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  title: z.string().min(2, 'Title is required'),
  bio: z.string().min(10, 'Bio must be at least 10 characters'),
  email: z.string().email('Invalid email address'),
  github: z.string().url('Invalid URL').optional(),
  linkedin: z.string().url('Invalid URL').optional(),
});

type SettingsForm = z.infer<typeof settingsSchema>;

export function Settings() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { settings, updateSettings } = useSettingsStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SettingsForm>({
    resolver: zodResolver(settingsSchema),
    defaultValues: settings,
  });

  const onSubmit = async (data: SettingsForm) => {
    try {
      setIsSubmitting(true);
      updateSettings(data);
      toast.success('Settings updated successfully!');
    } catch (error) {
      toast.error('Failed to update settings');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Settings</h1>
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <Input
              {...register('name')}
              error={!!errors.name}
              placeholder="Your name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Title</label>
            <Input
              {...register('title')}
              error={!!errors.title}
              placeholder="Your professional title"
            />
            {errors.title && (
              <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Bio</label>
            <Textarea
              {...register('bio')}
              error={!!errors.bio}
              placeholder="A brief description about yourself"
            />
            {errors.bio && (
              <p className="text-red-500 text-sm mt-1">{errors.bio.message}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <Input
              {...register('email')}
              type="email"
              error={!!errors.email}
              placeholder="your@email.com"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">GitHub URL</label>
            <Input
              {...register('github')}
              error={!!errors.github}
              placeholder="https://github.com/yourusername"
            />
            {errors.github && (
              <p className="text-red-500 text-sm mt-1">{errors.github.message}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">LinkedIn URL</label>
            <Input
              {...register('linkedin')}
              error={!!errors.linkedin}
              placeholder="https://linkedin.com/in/yourusername"
            />
            {errors.linkedin && (
              <p className="text-red-500 text-sm mt-1">
                {errors.linkedin.message}
              </p>
            )}
          </div>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Saving...' : 'Save Settings'}
          </Button>
        </form>
      </div>
    </div>
  );
}