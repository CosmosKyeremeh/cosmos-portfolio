import dotenv from 'dotenv';
import { connectDatabase } from '../config/database';
import Admin from '../models/Admin';

dotenv.config();

const seedAdmin = async (): Promise<void> => {
  try {
    const existingAdmin = await Admin.findOne({ email: 'admin@cosmosportfolio.com' });

    if (existingAdmin) {
      console.log('ℹ️  Admin user already exists');
      return;
    }

    await Admin.create({
      email: 'admin@cosmosportfolio.com',
      password: 'Admin123!',
      name: 'Cosmos Kyeremeh',
    });

    console.log('✅ Admin user created successfully');
    console.log('📧 Email: admin@cosmosportfolio.com');
    console.log('🔑 Password: Admin123!');
    console.log('⚠️  IMPORTANT: Change this password after first login!');
  } catch (error) {
    console.error('❌ Error seeding admin:', error);
    throw error;
  }
};

const seed = async (): Promise<void> => {
  try {
    console.log('');
    console.log('='.repeat(50));
    console.log('🌱 STARTING DATABASE SEED');
    console.log('='.repeat(50));
    console.log('');

    await connectDatabase();
    await seedAdmin();

    console.log('');
    console.log('='.repeat(50));
    console.log('✅ DATABASE SEEDING COMPLETED');
    console.log('='.repeat(50));
    console.log('');

    process.exit(0);
  } catch (error) {
    console.error('');
    console.error('='.repeat(50));
    console.error('❌ SEEDING FAILED');
    console.error('='.repeat(50));
    console.error(error);
    console.error('');
    process.exit(1);
  }
};

seed();