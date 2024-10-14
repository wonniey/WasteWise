# Generated by Django 4.2.16 on 2024-10-14 04:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userprofile',
            name='role',
            field=models.CharField(blank=True, choices=[('general', 'General'), ('collector', 'Collector'), ('regulator', 'Regulator')], default='general', max_length=10),
        ),
    ]
