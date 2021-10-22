# Generated by Django 3.2.5 on 2021-10-21 20:50

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('paperwebapp', '0002_auto_20211021_1148'),
    ]

    operations = [
        migrations.CreateModel(
            name='BookmarkModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('files', models.OneToOneField(null=True, on_delete=django.db.models.deletion.CASCADE, to='paperwebapp.files')),
            ],
        ),
    ]
